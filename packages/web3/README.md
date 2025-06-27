# Web3 Package

This package provides shared Web3 functionality for apps.

## Usage

First add the package to your apps package.json dependencies:

```txt
...
"@repo/web3": "workspace:*",
...
```

Next create a local provider in your app to wrap the Web3Provider from @repo/web3.

```tsx
'use client'

import { getWagmiConfig, Web3Provider as WagmiWeb3Provider, ChainId } from '@repo/web3'
import { PropsWithChildren } from 'react'

export const SUPPORTED_CHAINS = [ChainId.Mainnet, ChainId.Base] as const

export const walletConnectId = process.env.NEXT_PUBLIC_REOWN_APP_ID || ''

export function Web3Provider({ children }: PropsWithChildren) {
  return (
    <WagmiWeb3Provider
      wagmiConfig={getWagmiConfig({
        appName: 'Your app name',
        walletConnectId,
        chainIds: SUPPORTED_CHAINS,
      })}
    >
      {children}
    </WagmiWeb3Provider>
  )
}
```

Wrap your app with this provider.

You should now be able to use all the web3 functionality provided by the package, e.g. Use the
`<ConnectWallet />` component to add RainbowKit wallet connection functionality. Then use
`useUserAccount` to access the connected account.
