import { base as appKitBase } from '@reown/appkit/networks'
import { ChainId } from '../../web3.types'
import { AppChain } from './chain.types'

export const base: AppChain = {
  ...appKitBase,
  custom: {
    chainId: 8453,
    name: 'Base Mainnet',
    shortName: 'Base',
    morphoChainSlug: 'base',
    chain: ChainId.Base,
    iconUrl: '/images/chains/BASE.svg',
    blockExplorer: {
      baseUrl: 'https://basescan.org',
      name: 'BaseScan',
    },
    tokens: {
      addresses: {
        wNativeAsset: '0x4200000000000000000000000000000000000006',
      },
      nativeAsset: {
        name: 'Ether',
        address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        symbol: 'ETH',
        decimals: 18,
      },
    },
    contracts: {
      multicall2: '0xca11bde05977b3631167028862be2a173976ca11',
    },
  },
}
