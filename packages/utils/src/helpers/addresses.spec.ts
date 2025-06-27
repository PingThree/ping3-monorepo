import { describe, expect, it } from 'vitest'
import {
  abbreviateAddress,
  includesAddress,
  indexOfAddress,
  isSameAddress,
  removeAddress,
  sameAddresses,
  selectByAddress,
} from './addresses'

describe('address utilities', () => {
  describe('isSameAddress', () => {
    it('should return true for same addresses regardless of case', () => {
      expect(isSameAddress('0x123', '0x123')).toBe(true)
      expect(isSameAddress('0x123', '0X123')).toBe(true)
      expect(isSameAddress('0x123', '0x123')).toBe(true)
    })

    it('should return false for different addresses', () => {
      expect(isSameAddress('0x123', '0x456')).toBe(false)
    })

    it('should return false if either address is empty', () => {
      expect(isSameAddress('', '0x123')).toBe(false)
      expect(isSameAddress('0x123', '')).toBe(false)
      expect(isSameAddress('', '')).toBe(false)
    })
  })

  describe('includesAddress', () => {
    it('should find address in array regardless of case', () => {
      const addresses = ['0x123', '0x456', '0x789']
      expect(includesAddress(addresses, '0x123')).toBe(true)
      expect(includesAddress(addresses, '0X123')).toBe(true)
    })

    it('should return false if address is not in array', () => {
      const addresses = ['0x123', '0x456', '0x789']
      expect(includesAddress(addresses, '0xabc')).toBe(false)
    })

    it('should return false if address is empty', () => {
      const addresses = ['0x123', '0x456', '0x789']
      expect(includesAddress(addresses, '')).toBe(false)
    })
  })

  describe('indexOfAddress', () => {
    it('should return correct index regardless of case', () => {
      const addresses = ['0x123', '0x456', '0x789']
      expect(indexOfAddress(addresses, '0x123')).toBe(0)
      expect(indexOfAddress(addresses, '0X123')).toBe(0)
      expect(indexOfAddress(addresses, '0x456')).toBe(1)
    })

    it('should return -1 if address is not found', () => {
      const addresses = ['0x123', '0x456', '0x789']
      expect(indexOfAddress(addresses, '0xabc')).toBe(-1)
    })

    it('should return -1 if address is empty', () => {
      const addresses = ['0x123', '0x456', '0x789']
      expect(indexOfAddress(addresses, '')).toBe(-1)
    })
  })

  describe('sameAddresses', () => {
    it('should return true for identical arrays', () => {
      const addresses1 = ['0x123', '0x456', '0x789']
      const addresses2 = ['0x123', '0x456', '0x789']
      expect(sameAddresses(addresses1, addresses2)).toBe(true)
    })

    it('should return true for arrays with same addresses in different order', () => {
      const addresses1 = ['0x123', '0x456', '0x789']
      const addresses2 = ['0x789', '0x123', '0x456']
      expect(sameAddresses(addresses1, addresses2)).toBe(true)
    })

    it('should return true for arrays with same addresses in different cases', () => {
      const addresses1 = ['0x123', '0x456', '0x789']
      const addresses2 = ['0X123', '0X456', '0X789']
      expect(sameAddresses(addresses1, addresses2)).toBe(true)
    })

    it('should return false for arrays with different addresses', () => {
      const addresses1 = ['0x123', '0x456', '0x789']
      const addresses2 = ['0x123', '0x456', '0xabc']
      expect(sameAddresses(addresses1, addresses2)).toBe(false)
    })
  })

  describe('selectByAddress', () => {
    it('should find value by address regardless of case', () => {
      const map = {
        '0x123': 'value1',
        '0x456': 'value2',
      }
      expect(selectByAddress(map, '0x123')).toBe('value1')
      expect(selectByAddress(map, '0X123')).toBe('value1')
    })

    it('should return undefined if address not found', () => {
      const map = {
        '0x123': 'value1',
        '0x456': 'value2',
      }
      expect(selectByAddress(map, '0x789')).toBeUndefined()
    })
  })

  describe('removeAddress', () => {
    it('should remove address from array regardless of case', () => {
      const addresses = ['0x123', '0x456', '0x789']
      expect(removeAddress('0x123', addresses)).toEqual(['0x456', '0x789'])
      expect(removeAddress('0X123', addresses)).toEqual(['0x456', '0x789'])
    })

    it('should return same array if address not found', () => {
      const addresses = ['0x123', '0x456', '0x789']
      expect(removeAddress('0xabc', addresses)).toEqual(addresses)
    })
  })

  describe('abbreviateAddress', () => {
    it('should abbreviate address with default segment length', () => {
      const address = '0x1234567890abcdef1234567890abcdef12345678'
      expect(abbreviateAddress(address)).toBe('0x1234...5678')
    })

    it('should abbreviate address with custom segment length', () => {
      const address = '0x1234567890abcdef1234567890abcdef12345678'
      expect(abbreviateAddress(address, 6)).toBe('0x123456...345678')
    })

    it('should return empty string for empty address', () => {
      expect(abbreviateAddress('')).toBe('')
    })

    it('should handle checksum addresses', () => {
      const address = '0x1234567890abcdef1234567890abcdef12345678'
      expect(abbreviateAddress(address)).toBe('0x1234...5678')
    })
  })
})
