'use client'

import { useEffect, useState } from 'react'
import { useUserAccount } from '../providers/UserAccountProvider'

type PartialWalletConnectProvider = {
  session: { peer: { metadata: { name: string } } }
}

// Checks if the wallet connected via WalletConnect is a Safe account.
export function useWalletConnectMetadata() {
  const [walletName, setWalletName] = useState('')
  const { connector } = useUserAccount()

  useEffect(() => {
    if (!connector?.getProvider) return
    if (connector.id !== 'walletConnect') return
    connector.getProvider().then(provider => {
      const walletConnectProvider = provider as PartialWalletConnectProvider
      try {
        setWalletName(walletConnectProvider.session.peer.metadata.name)
      } catch {
        // Ignore errors in metadata
      }
    })
  }, [connector])

  const isSafeAccountViaWalletConnect = walletName === 'Safe{Wallet}'

  return { isSafeAccountViaWalletConnect }
}
