export const isDev = process.env.NODE_ENV === 'development'
export const isProd = process.env.NODE_ENV === 'production'

export const isE2E_Next = !!process.env.NEXT_PUBLIC_E2E_TEST
