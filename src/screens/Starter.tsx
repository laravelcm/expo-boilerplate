import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import { useTailwind } from 'tailwind-rn'
import translate, { LocaleContext } from '@/utils/i18n'
import { ThemeContext } from '@/utils/theme'
import { LOCALES } from '@/utils/constants'
import { IntroCard } from '@/components/Cards'
import colors from '@/utils/colors'
import { Redux, Tailwind, Icon, Moon, Sun, Cypress, Eslint } from '@components/Svg'

const Starter = () => {
  const tailwind = useTailwind()
  const { locale, changeLocale } = React.useContext(LocaleContext)
  const { theme, toggleTheme } = React.useContext(ThemeContext)

  return (
    <SafeAreaView style={tailwind('h-full bg-white dark:bg-slate-900')}>
      <StatusBar style="auto" />
      <View style={tailwind('absolute top-14 right-4')}>
        <TouchableOpacity
          style={{
            ...tailwind('relative bg-white border border-slate-200 dark:border-transparent dark:bg-slate-800 p-2 rounded-md'),
            shadowColor: colors.slate[400],
            shadowOffset: {
              width: 1,
              height: 2,
            },
          }}
          onPress={toggleTheme}
        >
          {theme === 'light' ? <Sun width={24} height={24} fill={colors.yellow[400]} /> : <Moon width={24} height={24} fill={colors.white} />}
        </TouchableOpacity>
      </View>
      <View style={tailwind('pt-10 px-4 items-center justify-center h-full')}>
        <Icon width={60} height={60} />
        <View style={tailwind('mt-5')}>
          <Text style={tailwind('text-slate-500 dark:text-white text-center leading-5 font-medium')}>{translate('starter.welcome')}</Text>
          <View style={tailwind('mt-6')}>
            <IntroCard
              title="Tailwind CSS"
              description="Rapidly build modern websites without ever leaving your HTML."
              svg={<Tailwind width={20} height={20} />}
            />
            <IntroCard
              title="Redux Toolkit"
              description="The official, opinionated, batteries-included toolset for efficient Redux development."
              svg={<Redux width={20} height={20} />}
              style={tailwind('mt-2')}
            />
            <IntroCard
              title="CyPress"
              description="Cypress is a next generation front end testing tool built for the modern web."
              svg={<Cypress width={20} height={20} />}
              style={tailwind('mt-2')}
            />
            <IntroCard
              title="Eslint"
              description="ESLint statically analyzes your code to quickly find problems."
              svg={<Eslint width={20} height={20} />}
              style={tailwind('mt-2')}
            />
          </View>
        </View>
        <View style={tailwind('mt-5')}>
          <Text style={tailwind('text-slate-500 dark:text-white text-center leading-5 font-medium')}>{translate('starter.locale')}</Text>
          <View style={tailwind('items-center justify-center flex-row mt-3')}>
            {LOCALES.map(item => (
              <TouchableOpacity key={item.id} onPress={() => changeLocale(item.id)} style={tailwind('mx-2 px-3 py-2 relative overflow-hidden bg-white border border-slate-200 dark:bg-slate-800 rounded-md')}>
                <Text style={tailwind('text-slate-500 dark:text-white text-center leading-5 font-medium')}>{translate(item.name)}</Text>
                {locale === item.id && <View style={tailwind('absolute bottom-0 left-0 right-0 h-1 bg-yellow-400')} />}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Starter
