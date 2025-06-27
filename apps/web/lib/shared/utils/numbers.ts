/**
 * Scales a BigInt rate by a decimal scale (expressed as a string).
 *
 * @param {bigint} bigintValue - The BigInt rate to be scaled.
 * @param {string} scale - The decimal scale as a string (e.g. "1.23456").
 * @param {number} [precision=6] - The precision of the decimal places.
 * @returns {bigint} A new scaled BigInt value.
 */
export function scaleBigInt(bigintValue: bigint, scale: string, precision = 6): bigint {
  const numerator = BigInt(scale.split('.')[1] ?? '0')
  const denominator = 10n ** BigInt(precision)
  return (bigintValue * numerator) / denominator
}
