import { polygon as appKitPolygon } from '@reown/appkit/networks'
import { ChainId } from '../../web3.types'
import { AppChain } from './chain.types'

export const polygon: AppChain = {
  ...appKitPolygon,
  custom: {
    chainId: ChainId.Polygon,
    name: 'Polygon PoS',
    shortName: 'Polygon',
    morphoChainSlug: 'polygon',
    iconUrl: '/images/chains/POLYGON.svg',
    blockExplorer: {
      baseUrl: 'https://polygonscan.com',
      name: 'Polygonscan',
    },
    tokens: {
      addresses: {
        wNativeAsset: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270', // WPOL
      },
      nativeAsset: {
        name: 'Pol',
        address: '0x0000000000000000000000000000000000001010',
        symbol: 'POL',
        decimals: 18,
      },
      doubleApprovalRequired: [],
    },
  },
}
