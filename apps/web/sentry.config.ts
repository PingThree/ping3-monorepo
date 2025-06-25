import { SentryBuildOptions } from '@sentry/nextjs'

const sentryOptions: SentryBuildOptions = {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options

  org: 'morpho-labs-z6',
  project: 'curator-v2-app',

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Automatically annotate React components to show their full name in breadcrumbs and session replay
  reactComponentAnnotation: {
    enabled: true,
  },

  // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
  tunnelRoute: '/monitoring',

  // Hides source maps from generated client bundles
  sourcemaps: {
    disable: false,
  },

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors.
  // See the following for more information:
  // https://docs.sentry.io/product/crons/
  // https://vercel.com/docs/cron-jobs
  automaticVercelMonitors: true,
}

const sentryDSN: string =
  'https://66db7e35a5ff46daeb00182528c16aac@o1173271.ingest.us.sentry.io/4508886180954112'

export { sentryDSN, sentryOptions }
