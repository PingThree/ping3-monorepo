import { optimism as appKitOptimism } from '@reown/appkit/networks'
import { ChainId } from '../../web3.types'
import { AppChain } from './chain.types'

export const optimism: AppChain = {
  ...appKitOptimism,
  custom: {
    chainId: ChainId.Optimism,
    name: 'Optimism Mainnet',
    shortName: 'Optimism',
    morphoChainSlug: 'optimism',
    iconUrl: '/images/chains/OPTIMISM.svg',
    blockExplorer: {
      baseUrl: 'https://optimistic.etherscan.io',
      name: 'Optimistic Etherscan',
    },
    tokens: {
      addresses: {
        wNativeAsset: '0x4200000000000000000000000000000000000006', // WETH
      },
      nativeAsset: {
        name: 'Ether',
        address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        symbol: 'ETH',
        decimals: 18,
      },
      doubleApprovalRequired: [],
    },
  },
}
