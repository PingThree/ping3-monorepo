import { useTheme } from 'next-themes'

export function useColorMode() {
  const { theme } = useTheme()

  const isDark = theme === 'dark'
  const isLight = theme === 'light'

  return { isDark, isLight, theme }
}
