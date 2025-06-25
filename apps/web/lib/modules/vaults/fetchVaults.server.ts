import { getApolloServerClient } from '@/lib/modules/apollo/server.client'
import { Vault } from '@/lib/modules/vaults/vault.types'
import { filterVaultsWithTokens } from '@/lib/modules/vaults/vault.utils'
import { AllVaultsDocument } from '@/lib/shared/services/api/generated/graphql'

export async function fetchVaults() {
  const query = await getApolloServerClient().query({
    query: AllVaultsDocument,
  })

  // Transform the data to ensure all vaults have non-null tokens
  // It should never be the case that a vault does not have a token.
  // If it is, it means the query is not working as expected.
  // We need the type assertion here to tell TypeScript that the token is
  // non-null. Because you can't do that with ponder/drizzle.
  const vaults: Vault[] = query.data?.vaults?.items
    ? filterVaultsWithTokens(query.data.vaults.items)
    : []

  return {
    ...query,
    data: vaults,
  }
}
