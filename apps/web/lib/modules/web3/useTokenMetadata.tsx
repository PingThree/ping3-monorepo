import { MaybeChainId } from '@repo/web3'
import { Address, erc20Abi, formatUnits, isAddress } from 'viem'
import { useReadContracts } from 'wagmi'

/**
 * Hook to fetch ERC20 token metadata from a contract
 * @param address The token contract address
 * @param chain The chain the token is deployed on
 * @returns Token metadata including name, symbol, decimals and total supply
 */
export function useTokenMetadata(
  maybeAddress: string,
  maybeChainId: MaybeChainId,
  { enabled = true }: { enabled?: boolean } = {}
) {
  const address = isAddress(maybeAddress) ? (maybeAddress as Address) : undefined
  const chainId = Number(maybeChainId)

  const { data: tokenData, isLoading } = useReadContracts({
    query: {
      enabled: !!address && enabled,
    },
    contracts: [
      {
        address,
        chainId,
        abi: erc20Abi,
        functionName: 'name',
      },
      {
        address,
        chainId,
        abi: erc20Abi,
        functionName: 'symbol',
      },
      {
        address,
        chainId,
        abi: erc20Abi,
        functionName: 'decimals',
      },
      {
        address,
        chainId,
        abi: erc20Abi,
        functionName: 'totalSupply',
      },
    ],
  })

  const [name, symbol, decimals, totalSupplyInt] = tokenData ?? []

  const totalSupply =
    totalSupplyInt?.result && decimals?.result
      ? formatUnits(totalSupplyInt.result, decimals.result)
      : undefined

  return isLoading || !address
    ? undefined
    : {
        name: name?.result as string,
        address: address as string,
        symbol: symbol?.result as string,
        decimals: decimals?.result as number,
        totalSupply: totalSupply,
      }
}
