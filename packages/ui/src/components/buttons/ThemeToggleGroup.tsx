'use client'

import { LaptopIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { ToggleGroup, ToggleGroupItem } from '../_base/ToggleGroup'

export function ThemeToggleGroup() {
  const { setTheme, theme } = useTheme()

  return (
    <ToggleGroup
      type="single"
      variant="outline"
      value={theme}
      onValueChange={value => {
        if (value) setTheme(value)
      }}
    >
      <ToggleGroupItem value="light" aria-label="Light mode">
        <SunIcon className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Dark mode">
        <MoonIcon className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="system" aria-label="System mode">
        <LaptopIcon className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
