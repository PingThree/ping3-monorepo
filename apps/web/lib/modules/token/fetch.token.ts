import { Token } from '@repo/web3'
import { Address, erc20Abi, getContract, PublicClient } from 'viem'

/**
 * Fetches ERC20 metadata using a batch method.
 *
 * @param client - Public Client
 * @param address - Token contract address
 * @returns Token object containing name, symbol, decimals, and address
 */
export async function getToken(client: PublicClient, address: Address): Promise<Token> {
  const tokenContract = getContract({
    abi: erc20Abi,
    address,
    client,
  })

  const [name, symbol, decimals] = await Promise.all([
    tokenContract.read.name(),
    tokenContract.read.symbol(),
    tokenContract.read.decimals(),
  ])

  return {
    address,
    name,
    symbol,
    decimals,
  }
}
