import { Text, View } from 'react-native'
import { useTailwind } from 'tailwind-rn'
import type { IntroCardInterface } from '@/@types/cards'

export const IntroCard = ({
  title,
  description,
  svg,
  style,
}: IntroCardInterface) => {
  const tailwind = useTailwind()

  return (
    <View
      style={{
        ...tailwind(
          'bg-white p-2 rounded-md border border-gray-200 dark:bg-slate-800 dark:border-transparent'
        ),
        ...style,
      }}
    >
      <View style={tailwind('flex-row items-center')}>
        {svg}
        <Text
          style={tailwind(
            'ml-2 text-lg leading-6 font-medium text-slate-900 dark:text-white'
          )}
        >
          {title}
        </Text>
      </View>
      <Text
        style={tailwind(
          'mt-2 text-sm leading-5 text-slate-500 dark:text-slate-400'
        )}
      >
        {description}
      </Text>
    </View>
  )
}
