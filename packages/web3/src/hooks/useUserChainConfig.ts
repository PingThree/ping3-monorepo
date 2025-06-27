import { useUserAccount } from '../providers/UserAccountProvider'
import { getChainConfig } from '../utils/chain.utils'
import { ChainId } from '../web3.types'

export function useUserChainConfig() {
  const { chain } = useUserAccount()

  const chainId = Number(chain?.id ?? ChainId.Mainnet)

  return getChainConfig(chainId)
}
