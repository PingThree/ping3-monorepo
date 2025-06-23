'use client'

import { useUserAccount } from '@repo/web3'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { Hex, parseAbiItem } from 'viem'
import { getViemClient } from '../utils/viem.client'
import { useWalletConnectMetadata } from './useWalletConnectMetadata'

// Returns true when using a Safe Smart account:
// - app running as a Safe App
// - user connected via WalletConnect to a Safe Account
export function useIsSafeAccount(): boolean {
  const isSafeApp = useIsSafeApp()
  const { isSafeAccountViaWalletConnect } = useWalletConnectMetadata()
  return isSafeApp || isSafeAccountViaWalletConnect
}

// Returns true if the user is connected with a Safe Account
export function useIsSafeApp(): boolean {
  const { connector } = useUserAccount()

  return connector?.id === 'safe'
}

export function useSafeTxHash({
  wagmiTxHash,
  chainId,
  blockNumber,
  enabled,
}: {
  wagmiTxHash: Hex | undefined
  chainId: number
  blockNumber?: bigint
  enabled: boolean
}) {
  const [safeTxHash, setSafeTxHash] = useState<Hex | undefined>()
  const { userAddress } = useUserAccount()
  const viemClient = getViemClient(chainId)

  const safeLogs = useQuery({
    queryKey: ['safeLogs', userAddress, wagmiTxHash],
    queryFn: () =>
      viemClient.getLogs({
        event: parseAbiItem(['event ExecutionSuccess(bytes32 txHash, uint256 payment)']),
        address: userAddress,
        fromBlock: blockNumber,
      }),
    select: data => data.find(log => log.args.txHash === wagmiTxHash),
    refetchInterval: safeTxHash ? 0 : 2000, // Refetch every 2 seconds until the safeTxHash is found
    enabled: enabled && !!wagmiTxHash && !!userAddress,
  })

  useEffect(() => {
    const txHash = safeLogs.data?.transactionHash
    if (txHash) {
      setSafeTxHash(txHash)
    }
  }, [safeLogs.data?.transactionHash, safeTxHash])

  return { safeTxHash }
}
