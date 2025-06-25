import {
  AppSidebar,
  Button,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@repo/ui'
import {
  ArrowLeftFromLine,
  Binary,
  BookOpen,
  ChartLine,
  HandCoins,
  PlusIcon,
  Sparkles,
  Vault,
} from 'lucide-react'
import Link from 'next/link'

const footerItems = [
  {
    title: 'Curator v1 App',
    url: 'https://curator.morpho.org',
    icon: ArrowLeftFromLine,
  },
  {
    title: 'Consumer App',
    url: 'https://app.morpho.org',
    icon: Sparkles,
  },
  {
    title: 'Oracle Decoder App',
    url: 'https://oracles.morpho.dev/oracle-decoder',
    icon: Binary,
  },
  {
    title: 'Liquidations App',
    url: 'https://liquidation.morpho.org/',
    icon: HandCoins,
  },
  {
    title: 'Analytics',
    url: 'https://morpho.blockanalitica.com/',
    icon: ChartLine,
  },
  {
    title: 'Documentation',
    url: 'https://docs.morpho.org',
    icon: BookOpen,
  },
]

export function CuratorSidebar() {
  return (
    <AppSidebar footerItems={footerItems}>
      <SidebarGroup>
        <SidebarMenu>
          <SidebarMenuItem>
            <Button size="lg" variant="secondary" className="text-sm font-normal h-12" fullWidth>
              <PlusIcon className="size-4" />
              Create Vault
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarGroupLabel>Explore</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild className="rounded-sm">
                <Link href="/" className="flex gap-1 items-center">
                  <Vault className="size-4" />
                  <span className="text-sm">All Vaults</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </AppSidebar>
  )
}
