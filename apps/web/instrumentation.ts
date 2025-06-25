import * as Sentry from '@sentry/nextjs'
import { sentryDSN } from './sentry.config'

export async function register() {
  if (process.env.TURBOPACK) {
    return
  }

  if (process.env.NEXT_RUNTIME === 'nodejs') {
    Sentry.init({
      dsn: sentryDSN,
      // Setting this option to true will print useful information to the console while you're setting up Sentry.
      debug: false,
    })
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    Sentry.init({
      dsn: sentryDSN,
      // Setting this option to true will print useful information to the console while you're setting up Sentry.
      debug: false,
    })
  }
}

export const onRequestError = Sentry.captureRequestError
