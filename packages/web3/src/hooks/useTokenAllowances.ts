import { onlyExplicitRefetch } from '@repo/utils'
import { ChainId } from '@repo/web3'
import { zipObject } from 'lodash-es'
import { useCallback, useMemo } from 'react'
import { Address, ReadContractParameters, erc20Abi } from 'viem'
import { useReadContracts } from 'wagmi'
export type TokenAllowances = Record<Address, bigint>

export type UseTokenAllowancesResponse = ReturnType<typeof useTokenAllowances>

type Props = {
  chainId: ChainId
  userAddress: Address
  spenderAddress: Address
  tokenAddresses: Address[]
}

type AllowanceContracts = ReadContractParameters<typeof erc20Abi, 'allowance'> & { chainId: number }

export function useTokenAllowances({
  chainId,
  userAddress,
  spenderAddress,
  tokenAddresses,
}: Props) {
  const contracts = tokenAddresses.map(
    tokenAddress =>
      ({
        chainId,
        address: tokenAddress,
        abi: erc20Abi,
        functionName: 'allowance',
        args: [userAddress, spenderAddress],
      }) satisfies AllowanceContracts
  )

  const { data, isLoading, isRefetching, refetch } = useReadContracts({
    contracts,
    allowFailure: false,
    query: { enabled: !!spenderAddress && !!userAddress, ...onlyExplicitRefetch },
  })

  const allowancesByTokenAddress: Record<Address, bigint> = useMemo(
    () => (data ? zipObject(tokenAddresses, data) : {}),
    [data, tokenAddresses]
  )

  const allowanceFor = useCallback(
    (tokenAddress: Address): bigint => {
      // We don't need isSameAddress cause we use the same tokensAddresses source
      return allowancesByTokenAddress[tokenAddress] ?? 0n
    },
    [allowancesByTokenAddress]
  )

  return {
    isAllowancesLoading: isLoading,
    isAllowancesRefetching: isRefetching,
    allowances: allowancesByTokenAddress,
    spenderAddress,
    refetchAllowances: refetch as unknown as () => Promise<void>,
    allowanceFor,
  }
}
