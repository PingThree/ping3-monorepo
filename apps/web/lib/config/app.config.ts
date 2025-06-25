import { Config } from './config.types'

export const config: Config = {
  appEnv: (process.env.NEXT_PUBLIC_APP_ENV as Config['appEnv']) || 'dev',
}

export const isDev = process.env.NEXT_PUBLIC_APP_ENV === 'dev'
export const isProd = process.env.NEXT_PUBLIC_APP_ENV === 'prod'
export const isStaging = process.env.NEXT_PUBLIC_APP_ENV === 'staging'
