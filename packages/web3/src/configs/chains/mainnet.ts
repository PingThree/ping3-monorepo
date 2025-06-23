import { mainnet as appKitMainnet } from '@reown/appkit/networks'
import { ChainId } from '../../web3.types'
import { AppChain } from './chain.types'

export const mainnet: AppChain = {
  ...appKitMainnet,
  custom: {
    chainId: ChainId.Mainnet,
    name: 'Ethereum Mainnet',
    shortName: 'Ethereum',
    morphoChainSlug: 'ethereum',
    iconUrl: '/images/chains/MAINNET.svg',
    blockExplorer: {
      baseUrl: 'https://etherscan.io',
      name: 'Etherscan',
    },
    tokens: {
      addresses: {
        wNativeAsset: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        morpho: '0x58D97B57BB95320F9a05dC918Aef65434969c2B2',
      },
      nativeAsset: {
        name: 'Ether',
        address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        symbol: 'ETH',
        decimals: 18,
      },
      /**
       * The approval function for these tokens doesn't allow setting a new approval
       * level if the current level is > 0. Thus they must be approved in two steps
       * first setting to 0 then setting to the required amount.
       */
      doubleApprovalRequired: [
        '0xdac17f958d2ee523a2206206994597c13d831ec7', // USDT
        '0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c', // ENJ
      ],
    },
    contracts: {
      multicall2: '0x5ba1e12693dc8f9c48aad8770482f4739beed696',
      urd: '0x330eefa8a787552dc5cad3c3ca644844b1e61ddb',
    },
  },
}
