/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  BigInt: { input: string; output: string }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any }
}

export type Meta = {
  __typename: 'Meta'
  status?: Maybe<Scalars['JSON']['output']>
}

export type PageInfo = {
  __typename: 'PageInfo'
  endCursor?: Maybe<Scalars['String']['output']>
  hasNextPage: Scalars['Boolean']['output']
  hasPreviousPage: Scalars['Boolean']['output']
  startCursor?: Maybe<Scalars['String']['output']>
}

export type Query = {
  __typename: 'Query'
  _meta?: Maybe<Meta>
  token?: Maybe<Token>
  tokens: TokenPage
  vault?: Maybe<Vault>
  vaultMember?: Maybe<VaultMember>
  vaultMembers: VaultMemberPage
  vaults: VaultPage
}

export type QueryTokenArgs = {
  address: Scalars['String']['input']
  chainId: Scalars['Float']['input']
}

export type QueryTokensArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  orderDirection?: InputMaybe<Scalars['String']['input']>
  where?: InputMaybe<TokenFilter>
}

export type QueryVaultArgs = {
  address: Scalars['String']['input']
  chainId: Scalars['Float']['input']
}

export type QueryVaultMemberArgs = {
  chainId: Scalars['Float']['input']
  member: Scalars['String']['input']
  role: Scalars['String']['input']
  vaultAddress: Scalars['String']['input']
}

export type QueryVaultMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  orderDirection?: InputMaybe<Scalars['String']['input']>
  where?: InputMaybe<VaultMemberFilter>
}

export type QueryVaultsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  orderDirection?: InputMaybe<Scalars['String']['input']>
  where?: InputMaybe<VaultFilter>
}

export type Token = {
  __typename: 'token'
  address: Scalars['String']['output']
  chainId: Scalars['Int']['output']
  createdAtBlock?: Maybe<Scalars['BigInt']['output']>
  decimals: Scalars['Int']['output']
  name: Scalars['String']['output']
  symbol: Scalars['String']['output']
  vaults?: Maybe<VaultPage>
}

export type TokenVaultsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  orderDirection?: InputMaybe<Scalars['String']['input']>
  where?: InputMaybe<VaultFilter>
}

export type TokenFilter = {
  AND?: InputMaybe<Array<InputMaybe<TokenFilter>>>
  OR?: InputMaybe<Array<InputMaybe<TokenFilter>>>
  address?: InputMaybe<Scalars['String']['input']>
  address_contains?: InputMaybe<Scalars['String']['input']>
  address_ends_with?: InputMaybe<Scalars['String']['input']>
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  address_not?: InputMaybe<Scalars['String']['input']>
  address_not_contains?: InputMaybe<Scalars['String']['input']>
  address_not_ends_with?: InputMaybe<Scalars['String']['input']>
  address_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  address_not_starts_with?: InputMaybe<Scalars['String']['input']>
  address_starts_with?: InputMaybe<Scalars['String']['input']>
  chainId?: InputMaybe<Scalars['Int']['input']>
  chainId_gt?: InputMaybe<Scalars['Int']['input']>
  chainId_gte?: InputMaybe<Scalars['Int']['input']>
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  chainId_lt?: InputMaybe<Scalars['Int']['input']>
  chainId_lte?: InputMaybe<Scalars['Int']['input']>
  chainId_not?: InputMaybe<Scalars['Int']['input']>
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  createdAtBlock?: InputMaybe<Scalars['BigInt']['input']>
  createdAtBlock_gt?: InputMaybe<Scalars['BigInt']['input']>
  createdAtBlock_gte?: InputMaybe<Scalars['BigInt']['input']>
  createdAtBlock_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>
  createdAtBlock_lt?: InputMaybe<Scalars['BigInt']['input']>
  createdAtBlock_lte?: InputMaybe<Scalars['BigInt']['input']>
  createdAtBlock_not?: InputMaybe<Scalars['BigInt']['input']>
  createdAtBlock_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>
  decimals?: InputMaybe<Scalars['Int']['input']>
  decimals_gt?: InputMaybe<Scalars['Int']['input']>
  decimals_gte?: InputMaybe<Scalars['Int']['input']>
  decimals_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  decimals_lt?: InputMaybe<Scalars['Int']['input']>
  decimals_lte?: InputMaybe<Scalars['Int']['input']>
  decimals_not?: InputMaybe<Scalars['Int']['input']>
  decimals_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  name?: InputMaybe<Scalars['String']['input']>
  name_contains?: InputMaybe<Scalars['String']['input']>
  name_ends_with?: InputMaybe<Scalars['String']['input']>
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  name_not?: InputMaybe<Scalars['String']['input']>
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>
  name_starts_with?: InputMaybe<Scalars['String']['input']>
  symbol?: InputMaybe<Scalars['String']['input']>
  symbol_contains?: InputMaybe<Scalars['String']['input']>
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>
  symbol_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  symbol_not?: InputMaybe<Scalars['String']['input']>
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>
  symbol_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>
}

export type TokenPage = {
  __typename: 'tokenPage'
  items: Array<Token>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type Vault = {
  __typename: 'vault'
  address: Scalars['String']['output']
  chainId: Scalars['Int']['output']
  createdAt: Scalars['String']['output']
  createdAtBlock: Scalars['BigInt']['output']
  createdAtTx: Scalars['String']['output']
  curator?: Maybe<Scalars['String']['output']>
  members?: Maybe<VaultMemberPage>
  name: Scalars['String']['output']
  owner: Scalars['String']['output']
  symbol: Scalars['String']['output']
  token?: Maybe<Token>
  tokenAddress: Scalars['String']['output']
}

export type VaultMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  orderDirection?: InputMaybe<Scalars['String']['input']>
  where?: InputMaybe<VaultMemberFilter>
}

export type VaultFilter = {
  AND?: InputMaybe<Array<InputMaybe<VaultFilter>>>
  OR?: InputMaybe<Array<InputMaybe<VaultFilter>>>
  address?: InputMaybe<Scalars['String']['input']>
  address_contains?: InputMaybe<Scalars['String']['input']>
  address_ends_with?: InputMaybe<Scalars['String']['input']>
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  address_not?: InputMaybe<Scalars['String']['input']>
  address_not_contains?: InputMaybe<Scalars['String']['input']>
  address_not_ends_with?: InputMaybe<Scalars['String']['input']>
  address_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  address_not_starts_with?: InputMaybe<Scalars['String']['input']>
  address_starts_with?: InputMaybe<Scalars['String']['input']>
  chainId?: InputMaybe<Scalars['Int']['input']>
  chainId_gt?: InputMaybe<Scalars['Int']['input']>
  chainId_gte?: InputMaybe<Scalars['Int']['input']>
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  chainId_lt?: InputMaybe<Scalars['Int']['input']>
  chainId_lte?: InputMaybe<Scalars['Int']['input']>
  chainId_not?: InputMaybe<Scalars['Int']['input']>
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  createdAt?: InputMaybe<Scalars['String']['input']>
  createdAtBlock?: InputMaybe<Scalars['BigInt']['input']>
  createdAtBlock_gt?: InputMaybe<Scalars['BigInt']['input']>
  createdAtBlock_gte?: InputMaybe<Scalars['BigInt']['input']>
  createdAtBlock_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>
  createdAtBlock_lt?: InputMaybe<Scalars['BigInt']['input']>
  createdAtBlock_lte?: InputMaybe<Scalars['BigInt']['input']>
  createdAtBlock_not?: InputMaybe<Scalars['BigInt']['input']>
  createdAtBlock_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>
  createdAtTx?: InputMaybe<Scalars['String']['input']>
  createdAtTx_contains?: InputMaybe<Scalars['String']['input']>
  createdAtTx_ends_with?: InputMaybe<Scalars['String']['input']>
  createdAtTx_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  createdAtTx_not?: InputMaybe<Scalars['String']['input']>
  createdAtTx_not_contains?: InputMaybe<Scalars['String']['input']>
  createdAtTx_not_ends_with?: InputMaybe<Scalars['String']['input']>
  createdAtTx_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  createdAtTx_not_starts_with?: InputMaybe<Scalars['String']['input']>
  createdAtTx_starts_with?: InputMaybe<Scalars['String']['input']>
  createdAt_contains?: InputMaybe<Scalars['String']['input']>
  createdAt_ends_with?: InputMaybe<Scalars['String']['input']>
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  createdAt_not?: InputMaybe<Scalars['String']['input']>
  createdAt_not_contains?: InputMaybe<Scalars['String']['input']>
  createdAt_not_ends_with?: InputMaybe<Scalars['String']['input']>
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  createdAt_not_starts_with?: InputMaybe<Scalars['String']['input']>
  createdAt_starts_with?: InputMaybe<Scalars['String']['input']>
  curator?: InputMaybe<Scalars['String']['input']>
  curator_contains?: InputMaybe<Scalars['String']['input']>
  curator_ends_with?: InputMaybe<Scalars['String']['input']>
  curator_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  curator_not?: InputMaybe<Scalars['String']['input']>
  curator_not_contains?: InputMaybe<Scalars['String']['input']>
  curator_not_ends_with?: InputMaybe<Scalars['String']['input']>
  curator_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  curator_not_starts_with?: InputMaybe<Scalars['String']['input']>
  curator_starts_with?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  name_contains?: InputMaybe<Scalars['String']['input']>
  name_ends_with?: InputMaybe<Scalars['String']['input']>
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  name_not?: InputMaybe<Scalars['String']['input']>
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>
  name_starts_with?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<Scalars['String']['input']>
  owner_contains?: InputMaybe<Scalars['String']['input']>
  owner_ends_with?: InputMaybe<Scalars['String']['input']>
  owner_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  owner_not?: InputMaybe<Scalars['String']['input']>
  owner_not_contains?: InputMaybe<Scalars['String']['input']>
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>
  owner_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>
  owner_starts_with?: InputMaybe<Scalars['String']['input']>
  symbol?: InputMaybe<Scalars['String']['input']>
  symbol_contains?: InputMaybe<Scalars['String']['input']>
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>
  symbol_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  symbol_not?: InputMaybe<Scalars['String']['input']>
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>
  symbol_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>
  tokenAddress?: InputMaybe<Scalars['String']['input']>
  tokenAddress_contains?: InputMaybe<Scalars['String']['input']>
  tokenAddress_ends_with?: InputMaybe<Scalars['String']['input']>
  tokenAddress_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  tokenAddress_not?: InputMaybe<Scalars['String']['input']>
  tokenAddress_not_contains?: InputMaybe<Scalars['String']['input']>
  tokenAddress_not_ends_with?: InputMaybe<Scalars['String']['input']>
  tokenAddress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  tokenAddress_not_starts_with?: InputMaybe<Scalars['String']['input']>
  tokenAddress_starts_with?: InputMaybe<Scalars['String']['input']>
}

export type VaultMember = {
  __typename: 'vaultMember'
  addedAtBlock: Scalars['BigInt']['output']
  chainId: Scalars['Int']['output']
  member: Scalars['String']['output']
  role: Scalars['String']['output']
  vault?: Maybe<Vault>
  vaultAddress: Scalars['String']['output']
}

export type VaultMemberFilter = {
  AND?: InputMaybe<Array<InputMaybe<VaultMemberFilter>>>
  OR?: InputMaybe<Array<InputMaybe<VaultMemberFilter>>>
  addedAtBlock?: InputMaybe<Scalars['BigInt']['input']>
  addedAtBlock_gt?: InputMaybe<Scalars['BigInt']['input']>
  addedAtBlock_gte?: InputMaybe<Scalars['BigInt']['input']>
  addedAtBlock_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>
  addedAtBlock_lt?: InputMaybe<Scalars['BigInt']['input']>
  addedAtBlock_lte?: InputMaybe<Scalars['BigInt']['input']>
  addedAtBlock_not?: InputMaybe<Scalars['BigInt']['input']>
  addedAtBlock_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>
  chainId?: InputMaybe<Scalars['Int']['input']>
  chainId_gt?: InputMaybe<Scalars['Int']['input']>
  chainId_gte?: InputMaybe<Scalars['Int']['input']>
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  chainId_lt?: InputMaybe<Scalars['Int']['input']>
  chainId_lte?: InputMaybe<Scalars['Int']['input']>
  chainId_not?: InputMaybe<Scalars['Int']['input']>
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  member?: InputMaybe<Scalars['String']['input']>
  member_contains?: InputMaybe<Scalars['String']['input']>
  member_ends_with?: InputMaybe<Scalars['String']['input']>
  member_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  member_not?: InputMaybe<Scalars['String']['input']>
  member_not_contains?: InputMaybe<Scalars['String']['input']>
  member_not_ends_with?: InputMaybe<Scalars['String']['input']>
  member_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  member_not_starts_with?: InputMaybe<Scalars['String']['input']>
  member_starts_with?: InputMaybe<Scalars['String']['input']>
  role?: InputMaybe<Scalars['String']['input']>
  role_contains?: InputMaybe<Scalars['String']['input']>
  role_ends_with?: InputMaybe<Scalars['String']['input']>
  role_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  role_not?: InputMaybe<Scalars['String']['input']>
  role_not_contains?: InputMaybe<Scalars['String']['input']>
  role_not_ends_with?: InputMaybe<Scalars['String']['input']>
  role_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  role_not_starts_with?: InputMaybe<Scalars['String']['input']>
  role_starts_with?: InputMaybe<Scalars['String']['input']>
  vaultAddress?: InputMaybe<Scalars['String']['input']>
  vaultAddress_contains?: InputMaybe<Scalars['String']['input']>
  vaultAddress_ends_with?: InputMaybe<Scalars['String']['input']>
  vaultAddress_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  vaultAddress_not?: InputMaybe<Scalars['String']['input']>
  vaultAddress_not_contains?: InputMaybe<Scalars['String']['input']>
  vaultAddress_not_ends_with?: InputMaybe<Scalars['String']['input']>
  vaultAddress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  vaultAddress_not_starts_with?: InputMaybe<Scalars['String']['input']>
  vaultAddress_starts_with?: InputMaybe<Scalars['String']['input']>
}

export type VaultMemberPage = {
  __typename: 'vaultMemberPage'
  items: Array<VaultMember>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type VaultPage = {
  __typename: 'vaultPage'
  items: Array<Vault>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type AllVaultsQueryVariables = Exact<{ [key: string]: never }>

export type AllVaultsQuery = {
  __typename: 'Query'
  vaults: {
    __typename: 'vaultPage'
    items: Array<{
      __typename: 'vault'
      address: string
      chainId: number
      name: string
      symbol: string
      curator?: string | null
      owner: string
      tokenAddress: string
      token?: {
        __typename: 'token'
        name: string
        symbol: string
        address: string
        decimals: number
      } | null
    }>
  }
}

export const AllVaultsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AllVaults' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'vaults' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'AND' },
                      value: {
                        kind: 'ListValue',
                        values: [
                          {
                            kind: 'ObjectValue',
                            fields: [
                              {
                                kind: 'ObjectField',
                                name: { kind: 'Name', value: 'tokenAddress_not' },
                                value: { kind: 'StringValue', value: '', block: false },
                              },
                            ],
                          },
                          {
                            kind: 'ObjectValue',
                            fields: [
                              {
                                kind: 'ObjectField',
                                name: { kind: 'Name', value: 'tokenAddress_not' },
                                value: { kind: 'NullValue' },
                              },
                            ],
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'chainId' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'symbol' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'curator' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'owner' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'tokenAddress' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'token' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'symbol' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'decimals' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AllVaultsQuery, AllVaultsQueryVariables>
