import { Vault } from '@/lib/modules/vaults/vault.types'
import { AllVaultsQuery } from '@/lib/shared/services/api/generated/graphql'

// Type assertion function
export function assertVaultHasToken(
  vault: AllVaultsQuery['vaults']['items'][number]
): asserts vault is Vault {
  if (!vault.token) {
    throw new Error('Vault does not have a token')
  }
}

// Type guard function
export function isVaultWithToken(vault: AllVaultsQuery['vaults']['items'][number]): vault is Vault {
  return vault.token !== null && vault.token !== undefined
}

// Array filter helper
export function filterVaultsWithTokens(vaults: AllVaultsQuery['vaults']['items']): Vault[] {
  return vaults.filter(isVaultWithToken)
}
