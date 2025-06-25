import { useEffect, useRef } from 'react'

/**
 * Runs the effect once on mount, after the specified duration. Cleans up on unmount.
 */
export function useTimeout(effect: () => void, duration: number) {
  useEffect(() => {
    const timeout = setTimeout(effect, duration)
    return () => clearTimeout(timeout)
  }, [])
}

export function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef<() => void>(undefined)

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current()
      }
    }

    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
