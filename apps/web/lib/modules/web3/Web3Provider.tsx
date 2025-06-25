'use client'

import { getWagmiAdapter, useE2EConfig, Web3Provider as WagmiWeb3Provider } from '@repo/web3'
import { PropsWithChildren } from 'react'
import { SUPPORTED_CHAINS, walletConnectId } from './web3.config'

export function Web3Provider({ children, cookies }: PropsWithChildren<{ cookies: string | null }>) {
  const e2eConfig = useE2EConfig()

  const adapter = getWagmiAdapter({
    chainIds: SUPPORTED_CHAINS,
    projectId: walletConnectId,
  })

  return (
    <WagmiWeb3Provider wagmiAdapter={adapter} e2eConfig={e2eConfig} cookies={cookies}>
      {children}
    </WagmiWeb3Provider>
  )
}
