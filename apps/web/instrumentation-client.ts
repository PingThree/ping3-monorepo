import * as Sentry from '@sentry/nextjs'
import { sentryDSN } from './sentry.config'

Sentry.init({
  dsn: sentryDSN,
  debug: false,
})

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart
