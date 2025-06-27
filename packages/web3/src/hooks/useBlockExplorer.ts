import { getChainConfig } from '../utils/chain.utils'
import { ChainId } from '../web3.types'
import { useUserChainConfig } from './useUserChainConfig'

export function getBlockExplorerName(chain?: ChainId) {
  const _chain = chain || ChainId.Mainnet
  return getChainConfig(_chain).blockExplorer.name
}

function getBlockExplorerUrl(chain: ChainId) {
  return `${getChainConfig(chain).blockExplorer.baseUrl}`
}

export function getBlockExplorerTxUrl(txHash: string, chain?: ChainId) {
  const _chain = chain || ChainId.Mainnet
  return `${getBlockExplorerUrl(_chain)}/tx/${txHash}`
}

export function getBlockExplorerAddressUrl(address: string, chain?: ChainId) {
  const _chain = chain || ChainId.Mainnet
  return `${getBlockExplorerUrl(_chain)}/address/${address}`
}

export function getBlockExplorerTokenUrl(address: string, chain?: ChainId) {
  const _chain = chain || ChainId.Mainnet
  return `${getBlockExplorerUrl(_chain)}/token/${address}`
}

export function useBlockExplorer(chain?: ChainId) {
  const { blockExplorer } = useUserChainConfig()

  const baseUrl = chain ? getChainConfig(chain).blockExplorer.baseUrl : blockExplorer.baseUrl

  function getBlockExplorerTxUrl(txHash: string) {
    return `${baseUrl}/tx/${txHash}`
  }

  function getBlockExplorerAddressUrl(address: string) {
    return `${baseUrl}/address/${address}`
  }

  function getBlockExplorerTokenUrl(address: string) {
    return `${baseUrl}/token/${address}`
  }

  function getBlockExplorerBlockUrl(block: number) {
    return `${baseUrl}/block/${block}`
  }

  return {
    getBlockExplorerTxUrl,
    getBlockExplorerAddressUrl,
    getBlockExplorerTokenUrl,
    getBlockExplorerBlockUrl,
  }
}
