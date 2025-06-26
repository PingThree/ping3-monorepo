import { defineConfig } from "@wagmi/cli";
import { etherscan, react } from "@wagmi/cli/plugins";
import * as dotenv from "dotenv";
import { base, mainnet, polygon } from "wagmi/chains";
dotenv.config({ path: ".env.local" });

export default defineConfig({
  out: "src/generated.ts",
  contracts: [],
  plugins: [
    etherscan({
      apiKey: process.env.ETHERSCAN_API_KEY!,
      chainId: mainnet.id,
      contracts: [
        {
          name: "Ping3",
          address: {
            [mainnet.id]: "0x134e51285E2A0D732A83165decD0F80DcdD34eD5",
            [base.id]: "0x134e51285E2A0D732A83165decD0F80DcdD34eD5",
            [polygon.id]: "0x134e51285E2A0D732A83165decD0F80DcdD34eD5",
          },
        },
      ],
    }),
    react(),
  ],
});
