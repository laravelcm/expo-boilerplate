import React from 'react'
import { TailwindProvider } from 'tailwind-rn'
import type { ColorSchemeName } from 'react-native'
import { ThemeContext } from '@/utils/theme'
import Starter from './src/screens/Starter'
import {
  LocaleContext,
  getCurrentLocale,
  changeLocale as updateLocale,
} from './src/utils/i18n'
import utilities from './tailwind.json'

const App = () => {
  const [theme, setTheme] = React.useState<ColorSchemeName>('light')
  const [locale, setLocale] = React.useState<string>(getCurrentLocale())

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  const changeLocale = (locale: string) => {
    updateLocale(locale)
    setLocale(locale)
  }

  return (
    <LocaleContext.Provider value={{ locale, changeLocale }}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <TailwindProvider utilities={utilities} colorScheme={theme}>
          <Starter />
        </TailwindProvider>
      </ThemeContext.Provider>
    </LocaleContext.Provider>
  )
}

export default App
