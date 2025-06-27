import { Address } from 'viem'
import { createConfig } from 'wagmi'

export enum ChainId {
  Mainnet = 1,
  Polygon = 137,
  Base = 8453,
}

export type MaybeChainId = ChainId | string | number

export type WagmiConfig = ReturnType<typeof createConfig>

export interface Token {
  address: Address
  decimals: number
  name: string
  symbol: string
}
