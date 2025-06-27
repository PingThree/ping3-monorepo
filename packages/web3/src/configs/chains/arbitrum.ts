import { arbitrum as appKitArbitrum } from '@reown/appkit/networks'
import { ChainId } from '../../web3.types'
import { AppChain } from './chain.types'

export const arbitrum: AppChain = {
  ...appKitArbitrum,
  custom: {
    chainId: ChainId.Arbitrum,
    name: 'Arbitrum One',
    shortName: 'Arbitrum',
    morphoChainSlug: 'arbitrum',
    iconUrl: '/images/chains/ARBITRUM.svg',
    blockExplorer: {
      baseUrl: 'https://arbiscan.io',
      name: 'Arbiscan',
    },
    tokens: {
      addresses: {
        wNativeAsset: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1', // WETH
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
