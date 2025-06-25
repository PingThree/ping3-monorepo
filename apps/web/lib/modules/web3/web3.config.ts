import { ChainId } from '@repo/web3'

export const SUPPORTED_CHAINS = [
  // ChainId.Mainnet,
  ChainId.Base,
] as const

export type SupportedChain = (typeof SUPPORTED_CHAINS)[number]

export const walletConnectId = process.env.NEXT_PUBLIC_REOWN_APP_ID || ''
