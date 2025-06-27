'use client'

import { Address } from 'viem'

import {
  useBlockNumber,
  // eslint-disable-next-line no-restricted-imports
  useWaitForTransactionReceipt as useWaitForTransactionReceiptWagmi,
} from 'wagmi'
import { ChainId } from '../web3.types'
import { useIsSafeAccount, useSafeTxHash } from './safe.hooks'

/**
 * Wrapper around wagmi's useWaitForTransactionReceipt that works with Safe's too.
 *
 * @param hash - The hash of the transaction to wait for
 * @param chainId - The chain the hash is on.
 * @returns The return type of wagmi's useWaitForTransactionReceipt
 */
export function useWaitForTransactionReceipt(wagmiTxHash: Address | undefined, chainId: ChainId) {
  const isSafeAccount = useIsSafeAccount()

  const { data: blockNumber } = useBlockNumber({ chainId })

  const { safeTxHash } = useSafeTxHash({
    wagmiTxHash,
    chainId,
    blockNumber,
    enabled: isSafeAccount,
  })

  const hash = isSafeAccount ? safeTxHash : wagmiTxHash

  return useWaitForTransactionReceiptWagmi({ hash })
}
