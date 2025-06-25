import { AllVaultsQuery } from '@/lib/shared/services/api/generated/graphql'

// Helper type to extract the base vault type
type BaseVault = AllVaultsQuery['vaults']['items'][number]

// Helper type to extract the token type when it exists
export type VaultToken = NonNullable<BaseVault['token']>

// Custom type that ensures token is non-null and required
export type Vault = Omit<BaseVault, 'token'> & {
  token: VaultToken
}
