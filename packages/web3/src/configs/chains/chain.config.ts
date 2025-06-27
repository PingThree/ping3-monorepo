import { ChainId } from '../../web3.types'
import { AppChain } from './chain.types'

import { base } from './base'
import { mainnet } from './mainnet'
import { polygon } from './polygon'

export const chains: Record<ChainId, AppChain> = {
  [ChainId.Mainnet]: mainnet,
  [ChainId.Polygon]: polygon,
  [ChainId.Base]: base,
}
