import { ratio } from 'fuzzball'

// Mapping of common number substitutions
const leetspeakMap: Record<string, string> = {
  '0': 'o',
  '1': 'l',
  '3': 'e',
  '4': 'a',
  '5': 's',
  '7': 't',
}

/**
 * Normalize leetspeak to plain text.
 * Converts common leetspeak numbers to their letter equivalents.
 *
 * @param word - The leetspeak word to normalize.
 * @returns The normalized word with leetspeak converted to plain text.
 */
export function normalizeLeetspeak(word: string): string {
  return word.toLowerCase().replace(/[013457]/g, char => leetspeakMap[char] || char)
}

const forbiddenWord = 'morpho'

/**
 * Performs a fuzzy string comparison between the given vault name and
 * "morpho" to determine if the name is too similar. The similarity
 * threshold is currently set to 95, but can be adjusted for stricter or
 * more lenient blocking.
 *
 * @param vaultName - The vault name to check.
 * @returns true if the vault name is blocked, false otherwise.
 */
export function isBlockedVaultName(vaultName: string) {
  vaultName = normalizeLeetspeak(vaultName)
  const similarityThreshold = 95 // Adjust based on strictness (0-100)

  return (
    ratio(vaultName.toLowerCase(), forbiddenWord, {
      useCollator: true,
    }) >= similarityThreshold
  )
}

export function removeCommas(numStr: string) {
  return numStr.replace(/,/g, '')
}

/**
 * String Converter to convert snake_case to Title Case
 * Eg.
 * - quick_brown_fox -> Quick Brown Fox
 * - quick_brown____fox -> Quick Brown Fox
 * - quick_brown_fox----jumps_over -> Quick Brown Fox Jumps Over
 *
 */
export const convertSnakeToTitleCase = (s: string): string =>
  s
    .toLowerCase()
    .replace(/^[-_]*(.)/, (_, c: string) => c.toUpperCase())
    .replace(/[-_]+(.)/g, (_, c: string) => ' ' + c.toUpperCase())

/**
 * Converts an array of strings into a grammatically correct sentence with proper conjunctions.
 * @param {string[]} arr - The array of strings to convert
 * @returns {string} A formatted string where items are separated by commas and the last item is joined with 'and'
 * @example
 * arrayToSentence(['apple']) // returns 'apple'
 * arrayToSentence(['apple', 'banana']) // returns 'apple and banana'
 * arrayToSentence(['apple', 'banana', 'orange']) // returns 'apple, banana, and orange'
 */
export function arrayToSentence(arr: string[]): string {
  if (arr.length === 0) return ''
  if (arr.length === 1) return arr[0] ?? ''
  if (arr.length === 2) return arr.join(' and ')

  const lastElement = arr.pop()
  return arr.join(', ') + ', and ' + lastElement
}

/**
 * Compares two strings for alphabetical sorting.
 * @param {string} a - First string to compare
 * @param {string} b - Second string to compare
 * @returns {number} Returns -1 if a comes before b, 1 if a comes after b, or 0 if they're equal
 * @example
 * ['banana', 'apple'].sort(sortAlphabetically) // returns ['apple', 'banana']
 */
export function sortAlphabetically(a: string, b: string) {
  if (a < b) {
    return -1
  }
  if (a > b) {
    return 1
  }
  return 0
}

const exceptions = {
  are: 'were',
  eat: 'ate',
  go: 'went',
  have: 'had',
  inherit: 'inherited',
  is: 'was',
  run: 'ran',
  sit: 'sat',
  visit: 'visited',
  supply: 'supplied',
}

// grammatically predictable rules
export function getPastTense(verb: string) {
  if (Object.keys(exceptions).includes(verb)) {
    return exceptions[verb as keyof typeof exceptions]
  }

  if (/e$/i.test(verb)) {
    return verb + 'd'
  }
  if (/[aeiou]c/i.test(verb)) {
    return verb + 'ked'
  }
  // for american english only
  if (/el$/i.test(verb)) {
    return verb + 'ed'
  }
  if (/[aeio][aeiou][dlmnprst]$/.test(verb)) {
    return verb + 'ed'
  }
  if (/[aeiou][bdglmnprst]$/i.test(verb)) {
    return verb.replace(/(.+[aeiou])([bdglmnprst])/, '$1$2$2ed')
  }
  return verb + 'ed'
}
