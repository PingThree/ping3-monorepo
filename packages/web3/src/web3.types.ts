import { Address } from 'viem'
import { createConfig } from 'wagmi'

export enum ChainId {
  Mainnet = 1,
  Optimism = 10,
  Unichain = 130,
  Polygon = 137,
  Sonic = 146,
  Fraxtal = 252,
  Worldchain = 480,
  Base = 8453,
  Hyperevm = 999,
  Mode = 34443,
  Arbitrum = 42161,
  Hemi = 43111,
  Ink = 57073,
  Plume = 98866,
  Scroll = 534352,
  Sepolia = 11155111,
  Corn = 21000000,
  Lisk = 1135,
  Katana = 747474,
}

export type MaybeChainId = ChainId | string | number

export type WagmiConfig = ReturnType<typeof createConfig>

export interface Token {
  address: Address
  decimals: number
  name: string
  symbol: string
}
