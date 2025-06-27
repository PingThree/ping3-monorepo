import { Address } from 'viem'
import { describe, expect, it } from 'vitest'
import { bigintReplacer, bigIntReviver } from './json'

const MARKET1: Address = '0x1eda1b67414336cab3914316cb58339ddaef9e43f939af1fed162a989c98bc20'
const MARKET2: Address = '0x2eda1b67414336cab3914316cb58339ddaef9e43f939af1fed162a989c98bc21'
const BORROWER1: Address = '0x1111111111111111111111111111111111111111'
const BORROWER2: Address = '0x2222222222222222222222222222222222222222'
const BORROWER3: Address = '0x3333333333333333333333333333333333333333'

describe('storage.ts', () => {
  it('should serialize a MarketToBorrowerMap with bigint values correctly', () => {
    const map = {
      [MARKET1]: {
        [BORROWER1]: { borrow: 100n, collateral: 200n },
        [BORROWER2]: { borrow: 300n, collateral: 400n },
      },
      [MARKET2]: {
        [BORROWER3]: { borrow: 500n, collateral: 600n },
      },
    }

    const serialized = JSON.stringify(map, bigintReplacer)
    expect(serialized).toBe(
      JSON.stringify({
        [MARKET1]: {
          [BORROWER1]: { borrow: { __bigint__: '100' }, collateral: { __bigint__: '200' } },
          [BORROWER2]: { borrow: { __bigint__: '300' }, collateral: { __bigint__: '400' } },
        },
        [MARKET2]: {
          [BORROWER3]: { borrow: { __bigint__: '500' }, collateral: { __bigint__: '600' } },
        },
      })
    )
  })

  it('should deserialize a serialized MarketToBorrowerMap with bigint values correctly', () => {
    const serialized = JSON.stringify({
      [MARKET1]: {
        [BORROWER1]: { borrow: { __bigint__: '100' }, collateral: { __bigint__: '200' } },
        [BORROWER2]: { borrow: { __bigint__: '300' }, collateral: { __bigint__: '400' } },
      },
      [MARKET2]: {
        [BORROWER3]: { borrow: { __bigint__: '500' }, collateral: { __bigint__: '600' } },
      },
    })

    const deserialized = JSON.parse(serialized, bigIntReviver)
    expect(deserialized).toEqual({
      [MARKET1]: {
        [BORROWER1]: { borrow: 100n, collateral: 200n },
        [BORROWER2]: { borrow: 300n, collateral: 400n },
      },
      [MARKET2]: {
        [BORROWER3]: { borrow: 500n, collateral: 600n },
      },
    })
  })

  it('should handle empty MarketToBorrowerMap correctly', () => {
    const map = {}

    const serialized = JSON.stringify(map, bigintReplacer)
    expect(serialized).toBe('{}')

    const deserialized = JSON.parse(serialized, bigIntReviver)
    expect(deserialized).toEqual({})
  })

  it('should handle invalid serialized data gracefully', () => {
    const invalidSerialized = '{"invalid": "data"}'

    expect(() => JSON.parse(invalidSerialized, bigIntReviver)).not.toThrow()
    const deserialized = JSON.parse(invalidSerialized, bigIntReviver)
    expect(deserialized).toEqual({ invalid: 'data' })
  })
})
