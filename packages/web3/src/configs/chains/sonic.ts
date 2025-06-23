import { sonic as appKitSonic } from '@reown/appkit/networks'
import { zeroAddress } from 'viem'
import { ChainId } from '../../web3.types'
import { AppChain } from './chain.types'

export const sonic: AppChain = {
  ...appKitSonic,
  custom: {
    chainId: ChainId.Sonic,
    name: 'Sonic',
    shortName: 'Sonic',
    morphoChainSlug: 'sonic',
    iconUrl: '/images/chains/SONIC.svg',
    blockExplorer: {
      baseUrl: 'https://sonicscan.org',
      name: 'SonicScan',
    },
    tokens: {
      addresses: {
        wNativeAsset: '0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38', // wS (Wrapped Sonic)
      },
      nativeAsset: {
        name: 'Sonic',
        address: zeroAddress,
        symbol: 'S',
        decimals: 18,
      },
      doubleApprovalRequired: [],
    },
  },
}
