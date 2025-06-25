import { Vault } from '../vault.types'
import { VaultCard } from './VaultCard'

interface VaultGridProps {
  vaults: Vault[]
}

export function VaultGrid(props: VaultGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {props.vaults.map(vault => (
        <VaultCard key={vault.address} vault={vault} />
      ))}
    </div>
  )
}
