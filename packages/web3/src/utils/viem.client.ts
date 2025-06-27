import { AppKitNetwork } from '@reown/appkit/networks'
import { Chain, createPublicClient, fallback, http, PublicClient } from 'viem'
import { mainnet } from 'viem/chains'
import { CreateConfigParameters } from 'wagmi'
import { chains } from '../configs/chains/chain.config'
import { getTransports } from '../configs/transports'
import { getE2ERpcUrl } from '../hooks/useE2EConfig'
import { ChainId } from '../web3.types'

function getViemChain(chainId: number): AppKitNetwork {
  if (chainId in ChainId) {
    return chains[chainId as ChainId]
  }
  throw new Error(`Chain ID ${chainId} is not supported.`)
}

/**
 * Creates and returns a Viem public client configured for the specified chain.
 * This is useful for the need for a custom viem client besides the wagmi client
 *
 * This client is bound to the shared RPC transport schema and E2E mode aware.
 *
 * @param chain - The chain ID for which the client should be configured.
 * @param batch - Arguments for batch processing, optional.
 * @param isE2E - E2E mode flag. If true, it uses a test RPC URL from localStorage.
 *
 * @returns A `PublicClient` instance configured for the specified chain and environment.
 *
 * @throws Will throw an error if `isE2E` is true and no RPC URL is set in localStorage.
 */
export function getViemClient(
  chain: ChainId,
  batch?: CreateConfigParameters['batch'],
  isE2E?: boolean
): PublicClient {
  const viemChain = getViemChain(chain)

  if (isE2E) {
    const testRpcUrl = getE2ERpcUrl()

    // this should never happen, but just in case.
    if (!testRpcUrl) {
      throw new Error(
        'E2E mode is enabled but no RPC URL is set. Please set the "testRpcUrl" in localStorage.'
      )
    }
    const customMainnet: Chain = {
      ...mainnet,
      rpcUrls: { default: { http: [testRpcUrl] } },
    }
    return createPublicClient({
      chain: customMainnet,
      transport: fallback([http(testRpcUrl)]),
    })
  }

  return createPublicClient({
    chain: viemChain as Chain,
    transport: getTransports(viemChain),
    batch,
  })
}
