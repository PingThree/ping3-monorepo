import { mode as appKitMode } from '@reown/appkit/networks'
import { ChainId } from '../../web3.types'
import { AppChain } from './chain.types'

export const mode: AppChain = {
  ...appKitMode,
  custom: {
    chainId: ChainId.Mode,
    name: 'Mode',
    shortName: 'Mode',
    morphoChainSlug: 'mode',
    iconUrl: '/images/chains/MODE.svg',
    blockExplorer: {
      baseUrl: 'https://explorer.mode.network',
      name: 'Mode Explorer',
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
