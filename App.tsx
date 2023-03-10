import React from 'react'
import { TailwindProvider } from 'tailwind-rn'
import Starter from './src/screens/Starter'
import { LocaleContext , getCurrentLocale, changeLocale } from './src/utils/i18n'
import { ThemeContext } from '@/utils/theme'
import utilities from './tailwind.json'
import { ColorSchemeName } from 'react-native'

 const App = () => {
  const [theme, setTheme] = React.useState<ColorSchemeName>('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <LocaleContext.Provider value={{ locale: getCurrentLocale(), changeLocale }}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <TailwindProvider utilities={utilities} colorScheme={theme}>
          <Starter />
        </TailwindProvider>
      </ThemeContext.Provider>
    </LocaleContext.Provider>
  )
 }

export default App
