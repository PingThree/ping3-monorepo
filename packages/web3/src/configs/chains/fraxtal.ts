import { fraxtal as appKitFraxtal } from '@reown/appkit/networks'
import { ChainId } from '../../web3.types'
import { AppChain } from './chain.types'

export const fraxtal: AppChain = {
  ...appKitFraxtal,
  custom: {
    chainId: ChainId.Fraxtal, // TODO: confirm enum exists
    name: 'Fraxtal Mainnet',
    shortName: 'Fraxtal',
    morphoChainSlug: 'fraxtal',
    iconUrl: '/images/chains/FRAXTAL.svg',
    blockExplorer: {
      baseUrl: 'https://fraxscan.com',
      name: 'Fraxscan',
    },
    tokens: {
      addresses: {
        wNativeAsset: '0xfc00000000000000000000000000000000000002', // WFRAX
      },
      nativeAsset: {
        name: 'Fraxtal',
        address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        symbol: 'FRAX',
        decimals: 18,
      },
      doubleApprovalRequired: [],
    },
  },
}
