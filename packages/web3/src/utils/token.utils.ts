import { includesAddress, isSameAddress } from '@repo/utils'
import { Address, erc20Abi, getContract, PublicClient } from 'viem'
import { ChainId, Token } from '../web3.types'
import { getChainConfig, getNativeAssetAddress, getWrappedNativeAssetAddress } from './chain.utils'

export function isNativeAsset(token: Address, chain: ChainId) {
  return nativeAssetFilter(chain)(token)
}

export function isWrappedNativeAsset(token: Address, chain: ChainId) {
  return wrappedNativeAssetFilter(chain)(token)
}

export function isNativeOrWrappedNative(token: Address, chain: ChainId) {
  return isWrappedNativeAsset(token, chain) || isNativeAsset(token, chain)
}

export function nativeAssetFilter(chain: ChainId) {
  return (tokenAddress: Address) => {
    const nativeAssetAddress = getNativeAssetAddress(chain)
    return isSameAddress(tokenAddress, nativeAssetAddress)
  }
}

export function wrappedNativeAssetFilter(chain: ChainId) {
  return (tokenAddress: Address) => {
    const wNativeAssetAddress = getWrappedNativeAssetAddress(chain)
    return isSameAddress(tokenAddress, wNativeAssetAddress)
  }
}

export function exclNativeAssetFilter(chain: ChainId) {
  return (tokenAddress: Address) => {
    const nativeAssetAddress = getNativeAssetAddress(chain)
    return !isSameAddress(tokenAddress, nativeAssetAddress)
  }
}

export function exclWrappedNativeAssetFilter(chain: ChainId) {
  return (tokenAddress: Address) => {
    const wNativeAssetAddress = getWrappedNativeAssetAddress(chain)
    return !isSameAddress(tokenAddress, wNativeAssetAddress)
  }
}

export function requiresDoubleApproval(chainId: ChainId, tokenAddress: Address) {
  return includesAddress(getChainConfig(chainId).tokens.doubleApprovalRequired || [], tokenAddress)
}

/**
 * Fetches ERC20 metadata using a batch method.
 *
 * @param client - Public Client
 * @param address - Token contract address
 * @returns Token object containing name, symbol, decimals, and address
 */
export async function getToken(client: PublicClient, address: Address): Promise<Token> {
  const tokenContract = getContract({
    abi: erc20Abi,
    address,
    client,
  })

  const [name, symbol, decimals] = await Promise.all([
    tokenContract.read.name(),
    tokenContract.read.symbol(),
    tokenContract.read.decimals(),
  ])

  return {
    address,
    name,
    symbol,
    decimals,
  }
}
