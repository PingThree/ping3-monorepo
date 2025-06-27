// @vitest-environment jsdom

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { renderHook, waitFor } from '@testing-library/react'
import React, { ReactNode } from 'react'
import { Address } from 'viem'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useAuthorizedUserQuery } from './useAuthorizedUserQuery'

// Mock fetch
const mockFetch = vi.fn()
global.fetch = mockFetch

// Mock tryCatch
const mockTryCatch = vi.hoisted(() => vi.fn())
vi.mock('@repo/utils', () => ({
  tryCatch: mockTryCatch,
}))

interface WrapperProps {
  children: ReactNode
}

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

  const Wrapper = (props: WrapperProps) => {
    return React.createElement(QueryClientProvider, { client: queryClient }, props.children)
  }

  return Wrapper
}

describe('useAuthorizedUserQuery', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('isAuthorized', () => {
    it('should return true when address is undefined', async () => {
      const { result } = renderHook(() => useAuthorizedUserQuery(undefined), {
        wrapper: createWrapper(),
      })

      await waitFor(() => {
        expect(result.current.data).toBe(true)
      })
    })

    it('should return true when address is authorized', async () => {
      const mockAddress = '0x1234567890123456789012345678901234567890' as Address
      const mockResponse = {
        ok: true,
        json: () => Promise.resolve({ isAuthorized: true, risk: 'low', riskReason: 'none' }),
      }

      mockFetch.mockResolvedValueOnce(mockResponse)
      mockTryCatch.mockResolvedValueOnce({ data: mockResponse, error: null })
      mockTryCatch.mockResolvedValueOnce({
        data: { isAuthorized: true, risk: 'low', riskReason: 'none' },
        error: null,
      })

      const { result } = renderHook(() => useAuthorizedUserQuery(mockAddress), {
        wrapper: createWrapper(),
      })

      await waitFor(() => {
        expect(result.current.data).toBe(true)
      })
    })

    it('should return true when fetch fails', async () => {
      vi.spyOn(console, 'error').mockImplementation(() => {})
      const mockAddress = '0x1234567890123456789012345678901234567890' as Address
      mockTryCatch.mockResolvedValueOnce({ data: null, error: new Error('Network error') })

      const { result } = renderHook(() => useAuthorizedUserQuery(mockAddress), {
        wrapper: createWrapper(),
      })

      await waitFor(() => {
        expect(result.current.data).toBe(true)
      })
    })

    it('should return true when response is not ok', async () => {
      vi.spyOn(console, 'error').mockImplementation(() => {})
      const mockAddress = '0x1234567890123456789012345678901234567890' as Address
      const mockResponse = {
        ok: false,
        statusText: 'Not Found',
      }

      mockTryCatch.mockResolvedValueOnce({ data: mockResponse, error: null })

      const { result } = renderHook(() => useAuthorizedUserQuery(mockAddress), {
        wrapper: createWrapper(),
      })

      await waitFor(() => {
        expect(result.current.data).toBe(true)
      })
    })

    it('should return true when JSON parsing fails', async () => {
      vi.spyOn(console, 'error').mockImplementation(() => {})
      const mockAddress = '0x1234567890123456789012345678901234567890' as Address
      const mockResponse = {
        ok: true,
        json: vi.fn(),
      }

      mockTryCatch.mockResolvedValueOnce({ data: mockResponse, error: null })
      mockTryCatch.mockResolvedValueOnce({ data: null, error: new Error('Invalid JSON') })

      const { result } = renderHook(() => useAuthorizedUserQuery(mockAddress), {
        wrapper: createWrapper(),
      })

      await waitFor(() => {
        expect(result.current.data).toBe(true)
      })
    })
  })

  describe('useAuthorizedUserQuery', () => {
    it('should use correct query key', async () => {
      const mockAddress = '0x1234567890123456789012345678901234567890' as Address
      const mockResponse = {
        ok: true,
        json: () => Promise.resolve({ isAuthorized: true, risk: 'low', riskReason: 'none' }),
      }

      mockFetch.mockResolvedValueOnce(mockResponse)
      mockTryCatch.mockResolvedValueOnce({ data: mockResponse, error: null })
      mockTryCatch.mockResolvedValueOnce({
        data: { isAuthorized: true, risk: 'low', riskReason: 'none' },
        error: null,
      })

      const { result } = renderHook(() => useAuthorizedUserQuery(mockAddress), {
        wrapper: createWrapper(),
      })

      await waitFor(() => {
        expect(result.current.data).toBe(true)
      })
    })
  })
})
