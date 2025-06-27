import { ZonedDateTime } from '@internationalized/date'
import { describe, expect, it } from 'vitest'
import { secondsToZonedDateTime } from './time'

describe('secondsToZonedDateTime', () => {
  it('should convert a Unix timestamp to a ZonedDateTime object', () => {
    // Example timestamp: 1714291200 (Sep 10, 2025 00:00:00 UTC)
    const timestamp = '1757462400'

    const result = secondsToZonedDateTime(timestamp)

    // Validate that the result is a ZonedDateTime instance
    expect(result).toBeInstanceOf(ZonedDateTime)

    // Validate the components of the ZonedDateTime object
    expect(result.year).toBe(2025)
    expect(result.month).toBe(9) // September
    expect(result.day).toBe(10)
    expect(result.hour).toBe(0)
    expect(result.minute).toBe(0)
    expect(result.second).toBe(0)
    expect(result.timeZone).toBe('Etc/UTC')
  })

  it('should handle different timestamps correctly', () => {
    // New Year's Day 2023, 00:00:00 UTC
    const timestamp = '1672531200'

    const result = secondsToZonedDateTime(timestamp)

    expect(result).toBeInstanceOf(ZonedDateTime)
    expect(result.year).toBe(2023)
    expect(result.month).toBe(1) // January
    expect(result.day).toBe(1)
    expect(result.hour).toBe(0)
    expect(result.minute).toBe(0)
    expect(result.second).toBe(0)
    expect(result.timeZone).toBe('Etc/UTC')
  })
})
