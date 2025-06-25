import { withSentryConfig } from '@sentry/nextjs'
import type { NextConfig } from 'next'
import { sentryOptions } from './sentry.config'

const nextConfig: NextConfig = {
  output: 'standalone',

  experimental: {
    turbo: {},
    optimizePackageImports: [
      'react-icons',
      'react-icons/*',
      'recharts',
      'date-fns',
      '@iconify/react',
    ],
  },

  webpack(config) {
    config.resolve.fallback = { fs: false, net: false, tls: false }
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    return config
  },

  logging: {
    fetches: {
      fullUrl: false,
      hmrRefreshes: false,
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  pageExtensions: ['tsx', 'ts'],

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
}

const config =
  process.env.NODE_ENV === 'production' ? withSentryConfig(nextConfig, sentryOptions) : nextConfig

export default config
