import { captureError } from '@/lib/shared/utils/errors'
import { tryCatch } from '@repo/utils'
import { ChainId, getRpcUrl } from '@repo/web3'

type Params = {
  params: Promise<{
    chain: string
  }>
}

/**
 * This route is used as a proxy request to a private RPC URL so we can use it in the app.
 *
 * @param request - The request object.
 * @param props - The parameters object.
 * @returns The response from the RPC URL.
 */
export async function POST(request: Request, props: Params) {
  // 1. Check if chain param is valid
  const params = await props.params
  const { chain: maybeChainId } = params

  if (!maybeChainId || !(maybeChainId in ChainId)) {
    return Response.json({ error: 'Chain is invalid' }, { status: 400 })
  }

  // 2. Get the RPC URL for the chain
  const chainId = Number(maybeChainId) as ChainId
  const rpcUrl = getRpcUrl(chainId)

  if (!rpcUrl) {
    return Response.json({ error: 'Chain not supported' }, { status: 400 })
  }

  // 3. Get the RPC body and send the request
  const rpcBody = await request.json()

  const { data: response, error } = await tryCatch<Response>(
    fetch(rpcUrl, {
      method: 'POST',
      body: JSON.stringify(rpcBody),
      next: {
        revalidate: 0,
      },
    })
  )

  if (error) {
    captureError(error)
    return Response.json({ error: error.message }, { status: 500 })
  }

  // 4. Parse the response as JSON
  const { data: rpcResponseJson, error: rpcJsonError } = await tryCatch<unknown>(response.json())

  if (rpcJsonError) {
    captureError(rpcJsonError)
    return Response.json({ error: rpcJsonError.message }, { status: 500 })
  }

  return Response.json(rpcResponseJson)
}
