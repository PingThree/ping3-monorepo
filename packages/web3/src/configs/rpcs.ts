import { ChainId } from '../web3.types'

export const chainToRpcMap: Record<ChainId, string | undefined> = {
  [ChainId.Arbitrum]: process.env.PRIVATE_ARBITRUM_RPC,
  [ChainId.Base]: process.env.PRIVATE_BASE_RPC,
  [ChainId.Corn]: process.env.PRIVATE_CORN_RPC,
  [ChainId.Fraxtal]: process.env.PRIVATE_FRAXTAL_RPC,
  [ChainId.Hemi]: process.env.PRIVATE_HEMI_RPC,
  [ChainId.Hyperevm]: process.env.PRIVATE_HYPEREVM_RPC,
  [ChainId.Ink]: process.env.PRIVATE_INK_RPC,
  [ChainId.Mainnet]: process.env.PRIVATE_MAINNET_RPC,
  [ChainId.Mode]: process.env.PRIVATE_MODE_RPC,
  [ChainId.Optimism]: process.env.PRIVATE_OPTIMISM_RPC,
  [ChainId.Plume]: process.env.PRIVATE_PLUME_RPC,
  [ChainId.Polygon]: process.env.PRIVATE_POLYGON_RPC,
  [ChainId.Scroll]: process.env.PRIVATE_SCROLL_RPC,
  [ChainId.Sepolia]: process.env.PRIVATE_SEPOLIA_RPC,
  [ChainId.Sonic]: process.env.PRIVATE_SONIC_RPC,
  [ChainId.Unichain]: process.env.PRIVATE_UNICHAIN_RPC,
  [ChainId.Worldchain]: process.env.PRIVATE_WORLDCHAIN_RPC,
  [ChainId.Lisk]: process.env.PRIVATE_LISK_RPC,
  [ChainId.Katana]: process.env.PRIVATE_KATANA_RPC,
}

export function getRpcUrl(chainId: ChainId) {
  return chainToRpcMap[chainId]
}
