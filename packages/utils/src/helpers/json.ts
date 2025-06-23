/**
 * Custom replacer for JSON.stringify.
 * Converts bigint values into an object of the form { __bigint__: string }.
 */
export function bigintReplacer(_: string, value: unknown): unknown {
  if (typeof value === 'bigint') {
    return { __bigint__: value.toString() }
  }
  return value
}

/**
 * Custom reviver for JSON.parse.
 * Converts objects of the form { __bigint__: string } back into bigint values.
 */
export function bigIntReviver(_: string, value: unknown): unknown {
  if (
    value !== null &&
    typeof value === 'object' &&
    !Array.isArray(value) &&
    '__bigint__' in value
  ) {
    // We know value is an object with __bigint__ property here.
    const obj = value as { __bigint__: string }
    return BigInt(obj.__bigint__)
  }
  return value
}
