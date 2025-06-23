'use client'

import { useEffect, useRef, useState } from 'react'

// The usage of mounted helps to overcome nextjs hydration mismatch
// errors where the state of the user on the server pass is different
// than the state on the client side rehydration.
export function useIsMounted() {
  const isMountedRef = useRef(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    isMountedRef.current = true
    setIsMounted(true)
    return () => {
      isMountedRef.current = false
    }
  }, [])

  return isMounted
}
