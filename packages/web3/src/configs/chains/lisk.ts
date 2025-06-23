import { lisk as appkitLisk } from '@reown/appkit/networks'
import { ChainId } from '../../web3.types'
import { AppChain } from './chain.types'

export const lisk: AppChain = {
  ...appkitLisk,
  custom: {
    chainId: ChainId.Lisk,
    name: 'Lisk',
    shortName: 'Lisk',
    morphoChainSlug: 'lisk',
    iconUrl: '/images/chains/LISK.svg',
    blockExplorer: {
      baseUrl: 'https://blockscout.lisk.com',
      name: 'Lisk Explorer',
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
