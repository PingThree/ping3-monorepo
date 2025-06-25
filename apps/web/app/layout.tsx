import { isDev } from '@/lib/config/app.config'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Metadata } from 'next'
import NextTopLoader from 'nextjs-toploader'
import './global.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Curator V2',
  description: 'Curator V2',
  icons: [
    { rel: 'icon', type: 'image/x-icon', url: '/favicon.ico' },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/favicon-light.ico',
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/favicon-dark.ico',
      media: '(prefers-color-scheme: dark)',
    },
  ],
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {isDev && process.env.REACT_SCAN && (
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script crossOrigin="anonymous" src="//unpkg.com/react-scan/dist/auto.global.js" />
        )}

        {/* Preconnect to common domains for performance optimization */}
        <link rel="preconnect" href="https://morpho.org" />
        <link
          rel="preconnect"
          href="https://walletconnect.org
"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body suppressHydrationWarning>
        <NextTopLoader showSpinner={false} color="#2470FF" />
        <Providers>
          {children}
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  )
}
