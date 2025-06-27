import { ponder } from "ponder:registry";
import { vault, vaultMember } from "ponder:schema";

const logErr = (ctx: string, err: unknown) =>
  console.error(
    `[role-handler] ${ctx}: ${err instanceof Error ? err.message : err}`
  );

ponder.on("Vault:SetOwner", async ({ event, context }) => {
  const { newOwner } = event.args;
  const { id: chainId } = context.chain;
  const addr = event.log.address;

  try {
    const res = await context.db
      .update(vault, {
        address: addr,
        chainId,
      })
      .set({ owner: newOwner });

    if (!res) {
      logErr(`vault not found for SetOwner ${addr}`, "");
    }
  } catch (err) {
    logErr(`DB failure updating owner for ${addr}`, err);
  }
});

ponder.on("Vault:SetCurator", async ({ event, context }) => {
  const { newCurator } = event.args;
  const { id: chainId } = context.chain;
  const addr = event.log.address;

  try {
    const res = await context.db
      .update(vault, { address: addr, chainId })
      .set({ curator: newCurator });

    if (!res) logErr(`vault not found for SetCurator ${addr}`, "");
  } catch (err) {
    logErr(`DB failure updating curator for ${addr}`, err);
  }
});

ponder.on("Vault:SetIsSentinel", async ({ event, context }) => {
  const addr = event.log.address;
  const chainId = context.chain.id;
  const account = event.args.account;
  const isMember = event.args.newIsSentinel;

  try {
    if (isMember) {
      // upsert sentinel
      await context.db
        .insert(vaultMember)
        .values({
          vaultAddress: addr,
          chainId,
          member: account,
          role: "sentinel",
          addedAtBlock: event.block.number,
        })
        .onConflictDoNothing();
    } else {
      // revoke sentinel
      const res = await context.db.delete(vaultMember, {
        vaultAddress: addr,
        chainId,
        member: account,
        role: "sentinel",
      });

      if (!res) {
        logErr(
          `no sentinel entry to revoke for ${account} on vault ${addr}`,
          ""
        );
      }
    }
  } catch (e) {
    logErr(`SetIsSentinel failed for vault ${addr}`, e);
  }
});

ponder.on("Vault:SetIsAllocator", async ({ event, context }) => {
  const addr = event.log.address;
  const chainId = context.chain.id;
  const account = event.args.account;
  const isMember = event.args.newIsAllocator;

  try {
    if (isMember) {
      // upsert allocator
      await context.db
        .insert(vaultMember)
        .values({
          vaultAddress: addr,
          chainId,
          member: account,
          role: "allocator",
          addedAtBlock: event.block.number,
        })
        .onConflictDoNothing();
    } else {
      // revoke allocator
      const res = await context.db.delete(vaultMember, {
        vaultAddress: addr,
        chainId,
        member: account,
        role: "allocator",
      });

      if (!res) {
        logErr(
          `no allocator entry to revoke for ${account} on vault ${addr}`,
          ""
        );
      }
    }
  } catch (e) {
    logErr(`SetIsAllocator failed for vault ${addr}`, e);
  }
});
