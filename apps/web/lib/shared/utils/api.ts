import { ChainId, getChain } from '@repo/web3'

type Success<T> = {
  data: T
  error: null
}

type Failure<E> = {
  data: null
  error: E
}

type Result<T, E = string> = Success<T> | Failure<E>

/**
 * Validates and parses the chainId from a raw string.
 * @param rawChain - The raw chain parameter from the URL.
 * @returns A Result object containing the chainId if valid, or an error message.
 */
export function validateChainId(rawChain: string): Result<number> {
  const parsed = Number(rawChain)

  if (isNaN(parsed) || !Number.isInteger(parsed) || parsed < 0) {
    return { data: null, error: 'Invalid chain parameter' }
  }

  if (!(parsed in ChainId)) {
    return { data: null, error: 'Chain not supported' }
  }

  const chainConfig = getChain(parsed)
  if (!chainConfig) {
    return { data: null, error: 'Chain configuration missing' }
  }

  return { data: parsed, error: null }
}

type ChainHandler<T> = (chainId: number, request: Request, params: Params<T>) => Promise<Response>

type Params<T> = {
  params: Promise<T & { chain: string }>
}

/**
 * Higher order function that validates chain ID before executing the handler
 */
export const withChainValidation = <T>(handler: ChainHandler<T>) => {
  return async (request: Request, { params }: Params<T>): Promise<Response> => {
    const { chain: rawChain } = await params

    // Validate chainId
    const validationResult = validateChainId(rawChain)
    if (validationResult.error !== null) {
      console.error('Chain validation error:', validationResult.error)
      return new Response(JSON.stringify({ error: validationResult.error }), { status: 400 })
    }

    return handler(validationResult.data, request, { params })
  }
}
