import { ArrowUpRight, BookOpen, ChartLine, Sparkles } from 'lucide-react'
import { PropsWithChildren, ReactNode } from 'react'
import { cn, MorphoLogo } from '../..'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '../_base/Sidebar'
import { ThemeToggleGroup } from '../buttons/ThemeToggleGroup'

type FooterItem = {
  title: string
  url: string
  icon: React.ElementType
}

const defaultFooterItems: FooterItem[] = [
  {
    title: 'Consumer App',
    url: 'https://app.morpho.org',
    icon: Sparkles,
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

export function AppSidebar({
  logo,
  footerItems = defaultFooterItems,
  headerHeight = 'h-18',
  children,
}: PropsWithChildren<{ logo?: ReactNode; footerItems?: FooterItem[]; headerHeight?: string }>) {
  return (
    <Sidebar>
      <SidebarHeader className={cn('justify-center', headerHeight)}>
        {logo || <MorphoLogo />}
      </SidebarHeader>
      <SidebarContent>{children}</SidebarContent>
      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupLabel>Resources</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {footerItems.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="group/item"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <item.icon className="text-text-tertiary" />
                      <span>{item.title}</span>
                      <ArrowUpRight className="hidden group-hover/item:block text-text-tertiary" />
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupContent>
            <ThemeToggleGroup />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  )
}
