import { Vault } from '@/lib/modules/vaults/vault.types'
import { Button, Card, CardContent, CardHeader } from '@repo/ui'
import { abbreviateAddress } from '@repo/utils'
import { ArrowUpRight, BarcodeIcon } from 'lucide-react'

export function VaultCard({ vault }: { vault: Vault }) {
  return (
    <Card className="h-50 py-0 pt-4 p-3 gap-2">
      <CardHeader className="flex justify-end w-full px-0">
        <Button size="icon" aria-label="Open vault details" variant="secondary" disabled>
          <ArrowUpRight className="w-5 h-5" />
        </Button>
      </CardHeader>
      <CardContent className="p-2 flex flex-col justify-between h-full gap-2">
        <h2 className="text-sm text-foreground">{vault.name}</h2>
        <p className=" text-xs text-muted-foreground">{vault.symbol}</p>

        <div className="flex items-center gap-2 text-muted-foreground mt-auto">
          <BarcodeIcon className="w-4 h-4" />
          <span className="text-xs">{abbreviateAddress(vault.address)}</span>
        </div>
      </CardContent>
    </Card>
  )
}
