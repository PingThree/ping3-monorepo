import { describe, expect, it } from 'vitest'
import { maxBigInt, minBigInt } from './bigint'

describe('maxBigInt', () => {
  it('should return the maximum bigint value', () => {
    expect(maxBigInt(1n, 2n, 3n)).toBe(3n)
    expect(maxBigInt(5n, 2n, 1n)).toBe(5n)
    expect(maxBigInt(-1n, -2n, -3n)).toBe(-1n)
  })

  it('should work with a single argument', () => {
    expect(maxBigInt(1n)).toBe(1n)
    expect(maxBigInt(-1n)).toBe(-1n)
  })

  it('should throw error when no arguments are provided', () => {
    expect(() => maxBigInt()).toThrow('maxBigInt requires at least one argument')
  })
})

describe('minBigInt', () => {
  it('should return the minimum bigint value', () => {
    expect(minBigInt(1n, 2n, 3n)).toBe(1n)
    expect(minBigInt(5n, 2n, 1n)).toBe(1n)
    expect(minBigInt(-1n, -2n, -3n)).toBe(-3n)
  })

  it('should work with a single argument', () => {
    expect(minBigInt(1n)).toBe(1n)
    expect(minBigInt(-1n)).toBe(-1n)
  })

  it('should throw error when no arguments are provided', () => {
    expect(() => minBigInt()).toThrow('minBigInt requires at least one argument')
  })
})
