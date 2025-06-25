import { ponder } from "ponder:registry";
import { token, vault } from "ponder:schema";
import { erc20Abi } from "viem";

const logErr = (ctx: string, err: unknown) =>
  console.error(
    `[CreateVaultV2] ${ctx}: ${err instanceof Error ? err.message : err}`
  );

ponder.on("VaultFactory:CreateVaultV2", async ({ event, context }) => {
  const { asset, vaultV2, name, symbol, owner } = event.args;
  const { id: chainId } = context.chain;
  const client = context.client;

  // fetch token data in batch
  let tokenName: string;
  let tokenSymbol: string;
  let tokenDecimals: number;
  const tokenNamePromise = client.readContract({
    address: event.args.asset,
    abi: erc20Abi,
    functionName: "name",
  });
  const tokenSymbolPromise = client.readContract({
    address: event.args.asset,
    abi: erc20Abi,
    functionName: "symbol",
  });
  const tokenDecimalsPromise = client.readContract({
    address: event.args.asset,
    abi: erc20Abi,
    functionName: "decimals",
  });
  try {
    [tokenName, tokenSymbol, tokenDecimals] = await Promise.all([
      tokenNamePromise,
      tokenSymbolPromise,
      tokenDecimalsPromise,
    ]);
  } catch (error) {
    console.error(
      `Failed to fetch token data for asset ${event.args.asset}. Skipping vault creation for ${event.args.vaultV2}`,
      error
    );
    return;
  }

  // upsert token
  try {
    await context.db
      .insert(token)
      .values({
        address: asset,
        chainId,
        name: tokenName,
        symbol: tokenSymbol,
        decimals: tokenDecimals,
      })
      .onConflictDoNothing();
  } catch (err) {
    logErr(`DB insert failed for token ${asset}`, err);
    return; // don’t create a vault that points to a missing token
  }

  // upsert vault
  try {
    await context.db
      .insert(vault)
      .values({
        address: vaultV2,
        chainId,
        name,
        symbol,
        tokenAddress: asset,
        tokenChainId: chainId,
        owner,
        createdAt: new Date(Number(event.block.timestamp) * 1000),
        createdAtBlock: event.block.number,
        createdAtTx: event.transaction.hash,
      })
      .onConflictDoNothing();
  } catch (err) {
    logErr(`DB insert failed for vault ${vaultV2}`, err);
  }
});
