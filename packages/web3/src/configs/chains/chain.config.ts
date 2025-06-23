import { ChainId } from '../../web3.types'
import { AppChain } from './chain.types'

import { arbitrum } from './arbitrum'
import { base } from './base'
import { corn } from './corn'
import { fraxtal } from './fraxtal'
import { hemi } from './hemi'
import { hyperevm } from './hyperevm'
import { ink } from './ink'
import { katana } from './katana'
import { lisk } from './lisk'
import { mainnet } from './mainnet'
import { mode } from './mode'
import { optimism } from './optimism'
import { plume } from './plume'
import { polygon } from './polygon'
import { scroll } from './scroll'
import { sepolia } from './sepolia'
import { sonic } from './sonic'
import { unichain } from './unichain'
import { worldchain } from './worldchain'

export const chains: Record<ChainId, AppChain> = {
  [ChainId.Mainnet]: mainnet,
  [ChainId.Optimism]: optimism,
  [ChainId.Unichain]: unichain,
  [ChainId.Polygon]: polygon,
  [ChainId.Sonic]: sonic,
  [ChainId.Fraxtal]: fraxtal,
  [ChainId.Worldchain]: worldchain,
  [ChainId.Base]: base,
  [ChainId.Hyperevm]: hyperevm,
  [ChainId.Mode]: mode,
  [ChainId.Arbitrum]: arbitrum,
  [ChainId.Hemi]: hemi,
  [ChainId.Ink]: ink,
  [ChainId.Plume]: plume,
  [ChainId.Scroll]: scroll,
  [ChainId.Sepolia]: sepolia,
  [ChainId.Corn]: corn,
  [ChainId.Lisk]: lisk,
  [ChainId.Katana]: katana,
}
