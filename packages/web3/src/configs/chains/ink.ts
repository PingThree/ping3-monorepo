import { ink as appKitInk } from '@reown/appkit/networks'
import { ChainId } from '../../web3.types'
import { AppChain } from './chain.types'

export const ink: AppChain = {
  ...appKitInk,
  custom: {
    chainId: ChainId.Ink,
    name: 'Ink',
    shortName: 'Ink',
    morphoChainSlug: 'ink',
    iconUrl: '/images/chains/INK.svg',
    blockExplorer: {
      baseUrl: 'https://explorer.inkonchain.com',
      name: 'Ink Explorer',
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
