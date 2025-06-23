import { scroll as appKitScroll } from '@reown/appkit/networks'
import { ChainId } from '../../web3.types'
import { AppChain } from './chain.types'

export const scroll: AppChain = {
  ...appKitScroll,
  custom: {
    chainId: ChainId.Scroll,
    name: 'Scroll',
    shortName: 'Scroll',
    morphoChainSlug: 'scroll',
    iconUrl: '/images/chains/SCROLL.svg',
    blockExplorer: {
      baseUrl: 'https://scrollscan.com',
      name: 'Scrollscan',
    },
    tokens: {
      addresses: {
        wNativeAsset: '0x5300000000000000000000000000000000000004', // WETH
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
