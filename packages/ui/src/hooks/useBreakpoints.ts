'use client'

import { useMediaQuery } from 'usehooks-ts'

const defaultBreakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}

function getBreakpoints() {
  if (typeof window === 'undefined' || !document?.documentElement) {
    return defaultBreakpoints
  }

  const styles = getComputedStyle(document.documentElement)
  return {
    sm: styles.getPropertyValue('--breakpoint-sm') || defaultBreakpoints.sm,
    md: styles.getPropertyValue('--breakpoint-md') || defaultBreakpoints.md,
    lg: styles.getPropertyValue('--breakpoint-lg') || defaultBreakpoints.lg,
    xl: styles.getPropertyValue('--breakpoint-xl') || defaultBreakpoints.xl,
    '2xl': styles.getPropertyValue('--breakpoint-2xl') || defaultBreakpoints['2xl'],
  }
}

export function useBreakpoints() {
  const breakpoints = getBreakpoints()

  const isMobile = useMediaQuery(`(max-width: calc(${breakpoints.md} - 1px))`)
  const isTablet = useMediaQuery(
    `(min-width: ${breakpoints.md}) and (max-width: calc(${breakpoints.lg} - 1px))`
  )
  const isDesktop = useMediaQuery(
    `(min-width: ${breakpoints.lg}) and (max-width: calc(${breakpoints['2xl']} - 1px))`
  )
  const isLargeDesktop = useMediaQuery(`(min-width: ${breakpoints['2xl']})`)

  const breakPointArray = [isMobile, isTablet, isDesktop, isLargeDesktop]

  const currentBreakpointIndex = breakPointArray.findIndex(is => is)

  /**
   * Responsive Variant - Returns the value corresponding to the current
   * breakpoint.
   *
   * @param values - An array of values for different breakpoints.
   * @returns The value that matches the current breakpoint.
   */
  function rv<T = string>(...values: T[]): T | undefined {
    return values[currentBreakpointIndex]
  }

  return {
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
    rv,
  }
}
