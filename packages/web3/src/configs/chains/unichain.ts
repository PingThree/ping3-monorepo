import { unichain as appKitUnichain } from '@reown/appkit/networks'
import { ChainId } from '../../web3.types'
import { AppChain } from './chain.types'

export const unichain: AppChain = {
  ...appKitUnichain,
  custom: {
    chainId: ChainId.Unichain,
    name: 'Unichain',
    shortName: 'Unichain',
    morphoChainSlug: 'unichain',
    iconUrl: '/images/chains/UNICHAIN.svg',
    blockExplorer: {
      baseUrl: 'https://uniscan.xyz',
      name: 'Uniscan',
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
