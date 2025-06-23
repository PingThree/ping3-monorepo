'use client'

import { fNum, Numberish } from 'defi-numbers'

type CurrencyOpts = { withSymbol?: boolean; abbreviated?: boolean }

const usdSymbol = '$'

export function useCurrency() {
  function formatCurrency(value: string | undefined) {
    return `${usdSymbol}${value ?? '0'}`
  }

  function parseCurrency(value: string) {
    return value.replace(/^\$/, '')
  }

  // Converts a USD value to the user's currency and formats in fiat style.
  function toCurrency(
    usdVal: Numberish,
    { withSymbol = true, abbreviated = true }: CurrencyOpts = {}
  ): string {
    const formattedAmount = fNum('fiat', usdVal, { abbreviated })

    if (formattedAmount.startsWith('<')) {
      return withSymbol ? '<' + usdSymbol + formattedAmount.substring(1) : formattedAmount
    }

    return withSymbol ? usdSymbol + formattedAmount : formattedAmount
  }

  return { toCurrency, formatCurrency, parseCurrency }
}
