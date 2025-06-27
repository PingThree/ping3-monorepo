'use client'

import { useState } from 'react'

export function useLoadingState() {
  const [isLoading, setIsLoading] = useState(false)

  async function trackLoading<T = unknown>(promise: Promise<T>): Promise<T> {
    setIsLoading(true)
    try {
      const result = await promise
      return result
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, trackLoading }
}
