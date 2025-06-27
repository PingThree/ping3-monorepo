import { tryCatch } from '@repo/utils'
import { useQuery } from '@tanstack/react-query'
import { Address } from 'viem'

type ScreenResponse = {
  isAuthorized: boolean
  risk: string
  riskReason: string
}

const domain = process.env.NEXT_PUBLIC_BLUE_SERVICES_API || 'blue-services.morpho.dev'

/**
 * Checks if the given address is authorized using Morpho's screening endpoint.
 * If there are any issues with the request or parsing the response, it will return true.
 *
 * @param {Address | undefined} address - The address to check for authorization.
 * @returns {Promise<boolean>} - A promise that resolves to a boolean indicating if the address is authorized.
 */
async function isAuthorized(address: Address | undefined): Promise<boolean> {
  if (!address) return true

  const { data: response, error } = await tryCatch(
    fetch(`https://${domain}/screen?address=${address}`)
  )

  if (error || !response.ok) {
    console.error(error || response.statusText)
    return true
  }

  const { data, error: jsonError } = await tryCatch<ScreenResponse>(response.json())

  if (jsonError) {
    console.error(jsonError)
    return true
  }

  return data.isAuthorized
}

export function useAuthorizedUserQuery(address: Address | undefined, enabled = true) {
  return useQuery({
    queryKey: ['web3.authorized', address],
    queryFn: () => isAuthorized(address),
    enabled,
    initialData: true,
  })
}
