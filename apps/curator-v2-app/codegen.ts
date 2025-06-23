import { CodegenConfig } from '@graphql-codegen/cli'
import 'dotenv/config'

const config: CodegenConfig = {
  generates: {
    [`./lib/shared/services/api/generated/`]: {
      schema: process.env.NEXT_PUBLIC_INDEXER_GQL_URL,
      documents: ['./lib/shared/services/api/**/*.graphql'],
      preset: 'client',
      config: {
        nonOptionalTypename: true,
        scalars: {
          BigInt: 'string',
          BigDecimal: 'string',
          Bytes: 'string',
          AmountHumanReadable: 'string',
          GqlBigNumber: 'string',
        },
      },
    },
  },
}

export default config
