// This cache is used to ensure a persistent cache across HMR in dev mode.
// For example, mimicking NextJS caching behavior that is not honored in dev mode.
// WARNING: This cache is not meant for production use.

type CacheEntry<T> = {
  data: T
  timestamp: number
}

type GlobalCacheStore = Record<string, CacheEntry<unknown>>

const GLOBAL_CACHE_KEY = '__custom_global_cache__'

function getGlobalCacheStore(): GlobalCacheStore {
  const globalTyped = globalThis as typeof globalThis & {
    [GLOBAL_CACHE_KEY]?: GlobalCacheStore
  }

  if (!globalTyped[GLOBAL_CACHE_KEY]) {
    globalTyped[GLOBAL_CACHE_KEY] = {}
  }

  return globalTyped[GLOBAL_CACHE_KEY]!
}

/**
 * Caches the result of fetchFn for the given TTL (ms).
 */
export async function globalCache<T>(
  key: string,
  fetchFn: () => Promise<T>,
  ttl: number = 60_000
): Promise<T> {
  const cache = getGlobalCacheStore()
  const now = Date.now()

  const entry = cache[key] as CacheEntry<T> | undefined

  if (entry && now - entry.timestamp < ttl) {
    return entry.data
  }

  const data = await fetchFn()
  cache[key] = { data, timestamp: now }

  return data
}

/**
 * Manually invalidate a cache key.
 */
export function invalidateGlobalCache(key: string): void {
  const cache = getGlobalCacheStore()
  delete cache[key]
}
