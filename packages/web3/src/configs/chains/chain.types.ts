import { AppKitNetwork } from '@reown/appkit/networks'
import { Address } from 'viem'
import { ChainId } from '../../web3.types'

export interface TokensConfig {
  addresses: {
    wNativeAsset: Address
    morpho?: Address
  }
  nativeAsset: {
    name: string
    address: Address
    symbol: string
    decimals: number
  }
  doubleApprovalRequired?: string[]
}
/**
 * Morpho config for V2.
 * Stores address registry and start block for Morpho V2 per chain.
 */
export interface MorphoV2Config {
  /**
   * The start block in the vault factory contract was deployed.
   */
  startBlock: bigint

  // Factory addresses
  vaultFactoryAddress: Address
  metaMorphoAdapterFactoryAddress: Address
  manualVicFactoryAddress: Address
}

export interface ContractsConfig {
  multicall2: Address
  urd?: Address
  v2?: MorphoV2Config
}

export interface BlockExplorerConfig {
  baseUrl: string
  name: string
}

export interface ChainConfig {
  chainId: ChainId
  name: string
  shortName: string
  morphoChainSlug: string
  iconUrl: string
  blockExplorer: BlockExplorerConfig
  tokens: TokensConfig
  contracts?: ContractsConfig
  minConfirmations?: number
}

export type AppChain = AppKitNetwork & {
  custom: ChainConfig
}
