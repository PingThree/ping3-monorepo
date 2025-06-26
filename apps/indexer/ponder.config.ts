import { VaultAbi, VaultFactoryAbi } from "@ping3/pong";
import { parseAbiItem } from "abitype";
import { createConfig, factory } from "ponder";

const CreateVaultV2Event = parseAbiItem(
  "event CreateVaultV2(address indexed owner, address indexed asset, address indexed vaultV2, string name, string symbol)"
);

export default createConfig({
  chains: {
    base: {
      id: 8453,
      rpc: process.env.PRIVATE_BASE_RPC,
    },
  },
  contracts: {
    VaultFactory: {
      abi: VaultFactoryAbi,
      chain: "base",
      address: "0x007eC984a7CC7DB7345D65A1f91869396eaCBB1d",
      startBlock: 31012014,
    },
    Vault: {
      abi: VaultAbi,
      chain: "base",
      address: factory({
        address: "0x007eC984a7CC7DB7345D65A1f91869396eaCBB1d",
        event: CreateVaultV2Event,
        parameter: "vaultV2",
      }),
      startBlock: 31012014,
    },
  },
});
