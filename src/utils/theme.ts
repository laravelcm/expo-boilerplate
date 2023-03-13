import React from 'react'
import type { ColorSchemeName } from 'react-native'

export const ThemeContext = React.createContext<{
  theme: ColorSchemeName
  toggleTheme: () => void
}>({
  theme: 'light',
  toggleTheme: () => {},
})
