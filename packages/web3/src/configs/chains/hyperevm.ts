import { defineChain } from '@reown/appkit/networks'
import { zeroAddress } from 'viem'
import { ChainId } from '../../web3.types'
import { AppChain } from './chain.types'

const customHyperEVM = defineChain({
  id: 999,
  name: 'HyperEVM',
  chainNamespace: 'eip155',
  caipNetworkId: 'eip155:999',
  nativeCurrency: {
    name: 'Hyperliquid',
    symbol: 'HYPE',
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ['https://rpc.hyperliquid.xyz/evm'] },
    public: { http: ['https://rpc.hyperliquid.xyz/evm'] },
  },
  blockExplorers: {
    default: { name: 'Purrsec', url: 'https://purrsec.com/' },
  },
})

export const hyperevm: AppChain = {
  ...customHyperEVM,
  custom: {
    chainId: 999,
    name: 'HyperEVM',
    shortName: 'HyperEVM',
    morphoChainSlug: 'hyperevm',
    chain: ChainId.Mainnet,
    iconUrl: '/images/chains/HYPEREVM.svg',
    blockExplorer: {
      baseUrl: 'https://purrsec.com',
      name: 'Purrsec',
    },
    tokens: {
      addresses: {
        wNativeAsset: '0x5555555555555555555555555555555555555555', // WHYPE
      },
      nativeAsset: {
        name: 'Hyperliquid',
        address: zeroAddress, // unknown
        symbol: 'HYPE',
        decimals: 18,
      },
      doubleApprovalRequired: [], // Add tokens if necessary
    },
  },
}
