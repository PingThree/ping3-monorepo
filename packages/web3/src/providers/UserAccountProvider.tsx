/* eslint-disable no-restricted-imports */
'use client'

import { useAppKitAccount, useAppKitNetwork, useDisconnect } from '@reown/appkit/react'
import { useIsMounted, useMandatoryContext } from '@repo/utils'
import { PropsWithChildren, createContext, useEffect } from 'react'
import { Address } from 'viem'
import { useAccount, useEnsAvatar, useEnsName } from 'wagmi'
import { isDev, isE2E_Next } from '../configs/process'
import { useAuthorizedUserQuery } from '../hooks/useAuthorizedUserQuery'
import { getChain } from '../utils/chain.utils'
import { ChainId } from '../web3.types'

export type UseUserAccountResponse = ReturnType<typeof useUserAccountHook>
export const UserAccountContext = createContext<UseUserAccountResponse>(
  {} as UseUserAccountResponse
)

export function useUserAccountHook() {
  const isMounted = useIsMounted()

  const accountQuery = useAccount()
  const { isConnected, address } = useAppKitAccount()
  const { chainId, switchNetwork } = useAppKitNetwork()
  const { disconnect } = useDisconnect()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { address: donotUseThisAddress, ...queryWithoutAddress } = accountQuery

  const userAddress = address as Address | undefined

  const { data: ensName } = useEnsName({ address: userAddress, chainId: 1 })
  const { data: ensAvatar } = useEnsAvatar({ name: ensName as string, chainId: 1 })

  const chain = chainId && chainId in ChainId ? getChain(chainId as ChainId) : undefined

  const { data: isAuthorized } = useAuthorizedUserQuery(userAddress, !isDev)

  // Disconnect the user if they are not authorized
  useEffect(() => {
    if (!isDev && !isAuthorized) {
      console.warn('User is not authorized, disconnecting')
      disconnect()
    }
  }, [userAddress, isAuthorized, isDev, disconnect])

  // TODO: Check if this is needed with AppKit
  // useSafeAppConnectionGuard(accountQuery.connector, chainId)

  // The usage of mounted helps to overcome nextjs hydration mismatch
  // errors where the state of the user account on the server pass is different
  // than the state on the client side rehydration.
  return {
    ...queryWithoutAddress,
    isLoading: !isMounted || accountQuery.isConnecting,
    isConnecting: !isMounted || accountQuery.isConnecting,
    connector: isMounted ? accountQuery.connector : undefined,
    userAddress: isE2E_Next ? accountQuery.address : userAddress,
    isConnected: isE2E_Next ? accountQuery.isConnected : isConnected,
    chainId,
    switchNetwork,
    ensName,
    ensAvatar,
    chain,
  }
}

export function UserAccountProvider({ children }: PropsWithChildren) {
  const hook = useUserAccountHook()
  return <UserAccountContext.Provider value={hook}>{children}</UserAccountContext.Provider>
}

export const useUserAccount = (): UseUserAccountResponse =>
  useMandatoryContext(UserAccountContext, 'UserAccount')!
