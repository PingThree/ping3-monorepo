import { corn as appKitCorn } from '@reown/appkit/networks'
import { ChainId } from '../../web3.types'
import { AppChain } from './chain.types'

export const corn: AppChain = {
  ...appKitCorn,
  custom: {
    chainId: ChainId.Corn,
    name: 'Corn Maizenet',
    shortName: 'Corn',
    morphoChainSlug: 'corn',
    iconUrl: '/images/chains/CORN.svg',
    blockExplorer: {
      baseUrl: 'https://cornscan.io',
      name: 'Corn Explorer',
    },
    tokens: {
      addresses: {
        wNativeAsset: '0xda5dDd7270381A7C2717aD10D1c0ecB19e3CDFb2', // WBTCN
      },
      nativeAsset: {
        name: 'Bitcorn',
        address: '0x386E7A3a0c0919c9d53c3b04FF67E73Ff9e45Fb6',
        symbol: 'BTCN',
        decimals: 18,
      },

      doubleApprovalRequired: [],
    },
  },
}
