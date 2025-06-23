import { VaultGrid } from '@/lib/modules/vaults/components/VaultGrid'
import { fetchVaults } from '@/lib/modules/vaults/fetchVaults.server'
import { CuratorSidebar } from '@/lib/ui/CuratorSidebar'
import { Button, Card, Heading, SidebarLayout1 } from '@repo/ui'
import { ConnectWalletV2 } from '@repo/web3'
import { PlusIcon } from 'lucide-react'

export default async function HomePage() {
  const { data: vaults } = await fetchVaults()

  return (
    <SidebarLayout1 sidebar={<CuratorSidebar />} nav={<CuratorNav />}>
      <div className="flex flex-col p-14 gap-14">
        <div className="flex justify-between items-center w-full">
          <Heading size="sm">Explore</Heading>
          <Button size="lg">
            <PlusIcon />
            <span>Create Vault</span>
          </Button>
        </div>
        <VaultGrid vaults={vaults} />
        <Card level={0} className="p-4">
          Level 0
          <Card level={1} className="p-4">
            Level 1{' '}
            <Card level={2} className="p-4">
              Level 2
              <Card level={3} className="p-4">
                Level 3
                <Card level={4} className="p-4">
                  Level 4
                </Card>
              </Card>
            </Card>
          </Card>
        </Card>
      </div>
    </SidebarLayout1>
  )
}

function CuratorNav() {
  return (
    <div className="h-full flex items-center justify-end gap-4">
      <ConnectWalletV2 />
    </div>
  )
}
