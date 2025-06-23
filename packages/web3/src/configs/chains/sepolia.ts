import { sepolia as appKitSepolia } from '@reown/appkit/networks'
import { ChainId } from '../../web3.types'
import { AppChain } from './chain.types'

export const sepolia: AppChain = {
  ...appKitSepolia,
  custom: {
    chainId: 11155111,
    name: 'Ethereum Testnet Sepolia',
    shortName: 'Sepolia',
    morphoChainSlug: 'sepolia',
    chain: ChainId.Sepolia,
    iconUrl: '/images/chains/MAINNET.svg',
    blockExplorer: {
      baseUrl: 'https://sepolia.etherscan.io',
      name: 'Etherscan',
    },
    tokens: {
      addresses: {
        wNativeAsset: '0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9',
        morpho: '0x6a73B1Ff3769a1C968dF3BCc42808A2Fb71EdECF',
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
      multicall2: '0xca11bde05977b3631167028862be2a173976ca11',
    },
  },
}
