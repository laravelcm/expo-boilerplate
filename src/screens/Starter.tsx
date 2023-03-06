import { StatusBar } from 'expo-status-bar'
import { Text, View, SafeAreaView } from 'react-native'
import { useTailwind } from 'tailwind-rn'
import translate from '@/utils/i18n'

const Starter = () => {
  const tailwind = useTailwind()
  return (
    <SafeAreaView style={tailwind('h-full')}>
      <View style={tailwind('bg-white pt-12 items-center justify-center h-full')}>
        <View style={tailwind('bg-green-100 px-3 py-1 rounded-full')}>
          <Text style={tailwind('text-green-800 font-medium')}>{translate('welcome')}</Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  )
}

export default Starter
