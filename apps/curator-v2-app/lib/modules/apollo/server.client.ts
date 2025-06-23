import { HttpLink } from '@apollo/client'
import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from '@apollo/client-integration-nextjs'

const { getClient, query } = registerApolloClient(
  () =>
    new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({
        uri: process.env.NEXT_PUBLIC_INDEXER_GQL_URL!,
        // forward Next.js fetch options if you want revalidation
        fetchOptions: { next: { revalidate: 10 } },
      }),
    })
)

export { getClient as getApolloServerClient, query as getApolloServerQuery }
