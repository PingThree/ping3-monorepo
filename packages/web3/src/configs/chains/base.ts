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
      urd: '0x5400dBb270c956E8985184335A1C62AcA6Ce1333',
      v2: {
        startBlock: 31012014n,
        vaultFactoryAddress: '0x007eC984a7CC7DB7345D65A1f91869396eaCBB1d',
        metaMorphoAdapterFactoryAddress: '0x5D7D38df44C2f3667C87537321B03b11a1578a00',
        manualVicFactoryAddress: '0xcb1648ab7c16385d0e93b66b78bbac3255a46404',
      },
    },
  },
}
