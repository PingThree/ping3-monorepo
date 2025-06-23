import { PropsWithChildren, ReactNode } from 'react'
import { Card } from '../_base/Card'
import { SidebarProvider } from '../_base/Sidebar'

export function SidebarLayout1({
  sidebar,
  nav,
  children,
}: PropsWithChildren<{ sidebar: ReactNode; nav: ReactNode }>) {
  return (
    <SidebarProvider>
      <nav aria-label="Primary">{sidebar}</nav>
      <main className="h-screen w-full flex flex-col">
        <nav aria-label="Secondary" className="h-18 flex flex-col justify-center gap-4 px-4">
          {nav}
        </nav>
        <div className="pb-4 px-4 flex-1 flex flex-col w-full min-h-0">
          <Card
            level={0}
            rounded="lg"
            gap="none"
            padY="none"
            className="overflow-y-auto flex-1 min-h-0"
          >
            {children}
          </Card>
        </div>
      </main>
    </SidebarProvider>
  )
}
