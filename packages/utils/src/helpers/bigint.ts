/**
 * Returns the maximum value among the provided bigint arguments.
 *
 * @param args - A list of bigint values to compare.
 * @returns The largest bigint value from the provided arguments.
 * @throws {Error} If no arguments are provided.
 */
export function maxBigInt(...args: bigint[]): bigint {
  if (args.length === 0) {
    throw new Error('maxBigInt requires at least one argument')
  }

  return args.reduce((max, val) => (val > max ? val : max))
}

/**
 * Returns the smallest bigint value from the provided arguments.
 *
 * @param args - A list of bigint values to compare. At least one argument is required.
 * @returns The smallest bigint value from the provided arguments.
 * @throws {Error} Throws an error if no arguments are provided.
 */
export function minBigInt(...args: bigint[]): bigint {
  if (args.length === 0) {
    throw new Error('minBigInt requires at least one argument')
  }

  return args.reduce((min, val) => (val < min ? val : min))
}

/**
 * Computes the absolute value of a bigint.
 *
 * @param value - The bigint value to compute the absolute value for.
 * @returns The absolute value of the input bigint.
 */
export function bigintAbs(value: bigint) {
  return value < 0n ? -value : value
}
