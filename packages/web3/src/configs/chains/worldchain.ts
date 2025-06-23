import { worldchain as appKitWorldChain } from '@reown/appkit/networks'
import { ChainId } from '../../web3.types'
import { AppChain } from './chain.types'

export const worldchain: AppChain = {
  ...appKitWorldChain,
  custom: {
    chainId: ChainId.Worldchain,
    name: 'World Chain',
    shortName: 'World',
    morphoChainSlug: 'worldchain',
    iconUrl: '/images/chains/WORLDCHAIN.svg',
    blockExplorer: {
      baseUrl: 'https://worldscan.org',
      name: 'Worldscan',
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
