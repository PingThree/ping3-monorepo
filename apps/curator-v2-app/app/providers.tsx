import { Web3Provider } from '@/lib/modules/web3/Web3Provider'
import { ThemeProvider } from '@repo/ui'
import { headers } from 'next/headers'
import { ReactNode } from 'react'

export async function Providers({ children }: { children: ReactNode }) {
  const headersObj = await headers()
  const cookies = headersObj.get('cookie')

  return (
    <ThemeProvider>
      <Web3Provider cookies={cookies}>{children}</Web3Provider>
    </ThemeProvider>
  )
}
