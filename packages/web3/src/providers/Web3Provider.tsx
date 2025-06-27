'use client'

import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { AppKitNetwork } from '@reown/appkit/networks'
import { createAppKit } from '@reown/appkit/react'
import { useIsMounted } from '@repo/utils'
import { PropsWithChildren } from 'react'
import { Config, cookieToInitialState, WagmiProvider } from 'wagmi'
import { ReactQueryProvider } from './ReactQueryProvider'
import { UserAccountProvider } from './UserAccountProvider'

export function Web3Provider({
  children,
  wagmiAdapter,
  e2eConfig,
  cookies,
  disableAppKit = false,
}: PropsWithChildren<{
  wagmiAdapter: WagmiAdapter
  e2eConfig?: Config
  cookies: string | null
  disableAppKit?: boolean
}>) {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies)

  // If E2E config is provided we are in e2e env so favour the e2e config
  const _config = (e2eConfig ?? wagmiAdapter?.wagmiConfig) as Config
  const isMounted = useIsMounted()

  // Fixes hydration error when using AppKit, if removed, Appkit doesn't detect
  // available browser wallets.
  if (!isMounted) return null

  if (!disableAppKit)
    createAppKit({
      adapters: [wagmiAdapter],
      projectId: wagmiAdapter.projectId ?? '',
      networks: wagmiAdapter.wagmiConfig.chains as unknown as [AppKitNetwork, ...AppKitNetwork[]],
      defaultNetwork: wagmiAdapter.wagmiConfig.chains[0],
      enableWalletGuide: false,
      features: {
        email: false,
        socials: false,
        legalCheckbox: true,
        swaps: false,
      },
    })

  return (
    <ReactQueryProvider>
      <WagmiProvider config={_config} initialState={initialState}>
        <UserAccountProvider>{children}</UserAccountProvider>
      </WagmiProvider>
    </ReactQueryProvider>
  )
}
