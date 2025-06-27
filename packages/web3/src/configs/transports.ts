import { AppKitNetwork } from '@reown/appkit/networks'
import { getBaseUrl } from '@repo/utils'
import { fallback, http } from 'wagmi'
import { ChainId } from '../web3.types'
import { getRpcUrl } from './rpcs'

/* If a request with the default rpc fails, it will fall back to the next one in the list.
  https://viem.sh/docs/clients/transports/fallback#fallback-transport
*/
export const fallbackRpcUrls: Partial<Record<ChainId, string>> = {
  [ChainId.Mainnet]: 'https://eth.llamarpc.com',
  [ChainId.Base]: 'https://base.llamarpc.com',
  [ChainId.Sepolia]: 'https://sepolia.llamarpc.com',
}

const baseUrl = getBaseUrl()
const getPrivateRpcUrl = (chain: ChainId) => `${baseUrl}/api/rpc/${chain}`

export function getTransports(chain: AppKitNetwork, skipPrivate = false) {
  const privateRpc = skipPrivate
    ? getRpcUrl(chain.id as ChainId)
    : getPrivateRpcUrl(chain.id as ChainId)
  const fallbackRpcUrl = fallbackRpcUrls[chain.id as ChainId]
  const lastResortRpcs = chain.rpcUrls.default.http.map(url => http(url))

  return fallback([http(privateRpc), http(fallbackRpcUrl), ...lastResortRpcs, http()])
}

export function getTransportsForChains(
  chains: [AppKitNetwork, ...AppKitNetwork[]],
  options?: { skipPrivate?: boolean }
) {
  return Object.fromEntries(
    chains.map(chain => [chain.id, getTransports(chain, options?.skipPrivate)])
  ) as Record<number, ReturnType<typeof getTransports>>
}
