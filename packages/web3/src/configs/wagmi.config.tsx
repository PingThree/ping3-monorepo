'use client'

import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { FallbackTransport, Transport } from 'viem'
import { cookieStorage, CreateConnectorFn, createStorage } from 'wagmi'
import { safe } from 'wagmi/connectors'
import { getTransportsForChains } from '../configs/transports'
import { getChains } from '../utils/chain.utils'
import { ChainId } from '../web3.types'
import { AppChain } from './chains'

export function getWagmiAdapter({
  chainIds,
  projectId,
  transports,
  chains,
  connectors,
  options,
}: {
  chainIds: readonly ChainId[]
  projectId: string
  transports?: Record<number, FallbackTransport<Transport[]>>
  chains?: [AppChain, ...AppChain[]]
  connectors?: CreateConnectorFn[]
  options?: {
    skipPrivate?: boolean
  }
}) {
  const _chains = chains || getChains(chainIds)
  const _transports = transports || getTransportsForChains(_chains, options)
  const _connectors = connectors || [
    safe({
      allowedDomains: [/app.safe.global$/],
      shimDisconnect: true,
    }),
  ]

  return new WagmiAdapter({
    storage: createStorage({
      storage: cookieStorage,
    }),
    ssr: true,
    projectId,
    networks: _chains,
    transports: _transports,
    connectors: _connectors,
  })
}
