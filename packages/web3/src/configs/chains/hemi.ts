import { hemi as appKitHemi } from '@reown/appkit/networks'
import { ChainId } from '../../web3.types'
import { AppChain } from './chain.types'

export const hemi: AppChain = {
  ...appKitHemi,
  custom: {
    chainId: ChainId.Hemi,
    name: 'Hemi',
    shortName: 'Hemi',
    morphoChainSlug: 'hemi',
    iconUrl: '/images/chains/HEMI.svg',
    blockExplorer: {
      baseUrl: 'https://explorer.hemi.xyz',
      name: 'Hemi Explorer',
    },
    tokens: {
      addresses: {
        wNativeAsset: '0x4200000000000000000000000000000000000006', // WETH
      },
      nativeAsset: {
        name: 'Ethereum',
        address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        symbol: 'ETH',
        decimals: 18,
      },
      doubleApprovalRequired: [],
    },
  },
}
