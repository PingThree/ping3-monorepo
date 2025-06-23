import { useMediaQuery } from 'usehooks-ts'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useBreakpoints } from './useBreakpoints'

const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}

// Mock useMediaQuery to control breakpoint states
vi.mock('usehooks-ts', () => ({
  useMediaQuery: vi.fn(),
}))

// Define a type for the breakpoint keys
type BreakpointKeys =
  | '--breakpoint-sm'
  | '--breakpoint-md'
  | '--breakpoint-lg'
  | '--breakpoint-xl'
  | '--breakpoint-2xl'

// Mock getComputedStyle to return specific breakpoint values
const mockGetComputedStyle = vi.fn().mockImplementation(() => ({
  getPropertyValue: (property: BreakpointKeys) => {
    const breakpoints = {
      '--breakpoint-sm': '640px',
      '--breakpoint-md': '768px',
      '--breakpoint-lg': '1024px',
      '--breakpoint-xl': '1280px',
      '--breakpoint-2xl': '1536px',
    }
    return breakpoints[property] || ''
  },
}))

describe('useBreakpoints', () => {
  const mockUseMediaQuery = vi.mocked(useMediaQuery)

  const isMobileMock = (query: string) => {
    if (query.includes(`max-width: calc(${breakpoints.md} - 1px)`)) return true
    return false
  }

  const isTabletMock = (query: string) => {
    if (
      query.includes(`min-width: ${breakpoints.md}`) &&
      query.includes(`max-width: calc(${breakpoints.lg} - 1px)`)
    )
      return true
    return false
  }

  const isDesktopMock = (query: string) => {
    if (
      query.includes(`min-width: ${breakpoints.lg}`) &&
      query.includes(`max-width: calc(${breakpoints['2xl']} - 1px)`)
    )
      return true
    return false
  }

  const isLargeDesktopMock = (query: string) => {
    if (query.includes(`min-width: ${breakpoints['2xl']}`)) return true
    return false
  }

  beforeEach(() => {
    vi.clearAllMocks()

    // Mock the global getComputedStyle function
    global.getComputedStyle = mockGetComputedStyle

    // Mock the document object
    global.document = {
      documentElement: {
        style: {
          getPropertyValue: (property: BreakpointKeys) => {
            const breakpoints = {
              '--breakpoint-sm': '640px',
              '--breakpoint-md': '768px',
              '--breakpoint-lg': '1024px',
              '--breakpoint-xl': '1280px',
              '--breakpoint-2xl': '1536px',
            }
            return breakpoints[property] || ''
          },
        },
      },
    } as unknown as Document
  })

  describe('rv function', () => {
    it('should return mobile value when on mobile breakpoint', () => {
      // Mock mobile breakpoint
      mockUseMediaQuery.mockImplementation(isMobileMock)

      const { rv } = useBreakpoints()
      expect(rv('mobile', 'tablet', 'desktop', 'large')).toBe('mobile')
    })

    it('should return tablet value when on tablet breakpoint', () => {
      // Mock tablet breakpoint
      mockUseMediaQuery.mockImplementation(isTabletMock)

      const { rv } = useBreakpoints()
      expect(rv('mobile', 'tablet', 'desktop', 'large')).toBe('tablet')
    })

    it('should return desktop value when on desktop breakpoint', () => {
      // Mock desktop breakpoint
      mockUseMediaQuery.mockImplementation(isDesktopMock)

      const { rv } = useBreakpoints()
      expect(rv('mobile', 'tablet', 'desktop', 'large')).toBe('desktop')
    })

    it('should return large desktop value when on large desktop breakpoint', () => {
      // Mock large desktop breakpoint
      mockUseMediaQuery.mockImplementation(isLargeDesktopMock)

      const { rv } = useBreakpoints()
      expect(rv('mobile', 'tablet', 'desktop', 'large')).toBe('large')
    })

    it('should return undefined when current breakpoint value is undefined', () => {
      // Mock tablet breakpoint
      mockUseMediaQuery.mockImplementation(isTabletMock)

      const { rv } = useBreakpoints()
      expect(rv('mobile', undefined, 'desktop', 'large')).toBe(undefined)
    })

    it('should return the same value when only one value is provided', () => {
      // Mock mobile breakpoint
      mockUseMediaQuery.mockImplementation(isMobileMock)

      const { rv } = useBreakpoints()
      expect(rv('mobile')).toBe('mobile')
    })

    it('should return undefined when no values are provided', () => {
      // Mock mobile breakpoint
      mockUseMediaQuery.mockImplementation(isMobileMock)

      const { rv } = useBreakpoints()
      expect(rv()).toBe(undefined)
    })

    it('should work with numbers as values', () => {
      // Mock mobile breakpoint
      mockUseMediaQuery.mockImplementation(isMobileMock)

      const { rv } = useBreakpoints()
      expect(rv(1, 2, 3, 4)).toBe(1)
    })

    it('should work with objects as values', () => {
      // Mock mobile breakpoint
      mockUseMediaQuery.mockImplementation(isMobileMock)

      const { rv } = useBreakpoints()
      const mobileObj = { size: 'small' }
      const tabletObj = { size: 'medium' }
      const desktopObj = { size: 'large' }
      const largeObj = { size: 'xlarge' }

      expect(rv(mobileObj, tabletObj, desktopObj, largeObj)).toEqual(mobileObj)
    })

    it('should work with boolean values', () => {
      // Mock mobile breakpoint
      mockUseMediaQuery.mockImplementation(isMobileMock)

      const { rv } = useBreakpoints()
      expect(rv(true, false, true, false)).toBe(true)
    })
  })
})
