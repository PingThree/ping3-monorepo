import { AppChain } from '../configs/chains'
import { chains } from '../configs/chains/chain.config'
import { ChainConfig } from '../configs/chains/chain.types'
import { ChainId } from '../web3.types'

export function isMainnet(chain: ChainId | number): boolean {
  return chain === ChainId.Mainnet
}

export function isNotMainnet(chain: ChainId | number): boolean {
  return !isMainnet(chain)
}

export function getChain(chainId: ChainId) {
  return chains[chainId]
}

export function getDefaultRpcUrl(chainId: ChainId) {
  return chains[chainId].rpcUrls.default.http[0]
}

export function getChains(chainIds: readonly ChainId[]): [AppChain, ...AppChain[]] {
  const chains: [AppChain, ...AppChain[]] =
    chainIds.length === 0 ? [getChain(ChainId.Mainnet)] : [getChain(chainIds[0]!)]

  for (let i = 1; i < chainIds.length; i++) {
    const chainId = chainIds[i]
    const chain = getChain(chainId!)
    if (chain) {
      chains.push(chain)
    }
  }
  return chains
}

/**
 * Fetches network config by chainId or network name type from API (ChainId). If chain
 * param is not provided or incorrect, it will return mainnet config.
 */
export function getChainConfig(chain: ChainId | number): ChainConfig {
  if (!chain || !(chain in ChainId)) return chains[ChainId.Mainnet].custom

  return chains[chain as ChainId].custom
}

export function getChainId(chainId: ChainId) {
  return getChainConfig(chainId)?.chainId
}

export function getNativeAsset(chainId: ChainId) {
  return getChainConfig(chainId)?.tokens.nativeAsset
}

export function getNativeAssetAddress(chainId: ChainId) {
  return getChainConfig(chainId)?.tokens.nativeAsset?.address
}

export function getWrappedNativeAssetAddress(chainId: ChainId) {
  return getChainConfig(chainId)?.tokens.addresses.wNativeAsset
}

export function getChainName(chainId: ChainId) {
  return getChainConfig(chainId)?.name
}

export function getChainIconUrl(chainId: ChainId) {
  return getChainConfig(chainId)?.iconUrl
}

export function getMorphoChainSlug(chainId: ChainId) {
  return getChainConfig(chainId)?.morphoChainSlug
}

export function getChainShortName(chainId: ChainId) {
  return getChainConfig(chainId)?.shortName
}
