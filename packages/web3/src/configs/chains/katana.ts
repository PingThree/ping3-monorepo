import { ChainId } from '../../web3.types'
import { AppChain } from './chain.types'

export const katana: AppChain = {
  id: ChainId.Katana,
  name: 'Katana',
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.katana.network'],
      webSocket: ['wss://rpc.katana.network'],
    },
    public: {
      http: ['https://rpc.katana.network'],
      webSocket: ['wss://rpc.katana.network'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Katana Explorer',
      url: 'https://explorer.katana.network/',
    },
  },
  custom: {
    chainId: ChainId.Katana,
    name: 'Katana',
    shortName: 'Katana',
    morphoChainSlug: 'katana',
    chain: ChainId.Katana,
    iconUrl: '/images/chains/KATANA.svg',
    blockExplorer: {
      baseUrl: 'https://explorer.katanarpc.com',
      name: 'Katana Explorer',
    },
    tokens: {
      addresses: {
        wNativeAsset: '0xEE7D8BCFb72bC1880D0Cf19822eB0A2e6577aB62',
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
      urd: '0xB605Ae0D112c117638592ec4F78148e6322a7b7b',
    },
  },
}
