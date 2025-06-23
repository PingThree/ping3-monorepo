import { plumeMainnet as appKitPlume } from '@reown/appkit/networks'
import { zeroAddress } from 'viem'
import { ChainId } from '../../web3.types'
import { AppChain } from './chain.types'

export const plume: AppChain = {
  ...appKitPlume,
  custom: {
    chainId: ChainId.Plume,
    name: 'Plume Mainnet',
    shortName: 'Plume',
    morphoChainSlug: 'plume',
    iconUrl: '/images/chains/PLUME.svg',
    blockExplorer: {
      baseUrl: 'https://phoenix-explorer.plumenetwork.xyz',
      name: 'Phoenix Explorer',
    },
    tokens: {
      addresses: {
        wNativeAsset: '0xEa237441c92CAe6FC17Caaf9a7acB3f953be4bd1',
      },
      nativeAsset: {
        name: 'Plume',
        address: zeroAddress,
        symbol: 'PLUME',
        decimals: 18,
      },
      doubleApprovalRequired: [],
    },
  },
}
