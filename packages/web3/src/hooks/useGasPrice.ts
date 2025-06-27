import { onlyExplicitRefetch, secs } from '@repo/utils'
import { useQuery } from '@tanstack/react-query'
import { bn, fNum } from 'defi-numbers'
import { formatUnits } from 'viem'
import { getViemClient } from '../utils/viem.client'
import { ChainId } from '../web3.types'

function getGasPrice(chain: ChainId) {
  const client = getViemClient(chain)
  return client.getGasPrice()
}

function formatGasPrice(gasPrice: bigint): string {
  return fNum('integer', formatUnits(gasPrice, 9))
}

function highGasPriceFor(chain: ChainId) {
  if (chain === ChainId.Mainnet) return 50
  return 500
}

export function useGasPriceQuery(chain: ChainId) {
  const query = useQuery({
    queryKey: ['gasPrice', chain],
    queryFn: () => getGasPrice(chain),
    refetchInterval: secs(30).toMs(),
    gcTime: secs(30).toMs(),
    ...onlyExplicitRefetch,
  })

  const gasPrice = query.data ? formatGasPrice(query.data) : undefined

  const isHighGasPrice = gasPrice ? bn(gasPrice).gte(highGasPriceFor(chain)) : false

  return { ...query, gasPrice, isHighGasPrice }
}
