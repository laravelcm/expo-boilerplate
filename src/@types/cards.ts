import type { ReactElement } from 'react'
import type { ViewStyle } from 'react-native'

export interface IntroCardInterface {
  title: string
  description: string
  svg: ReactElement
  style?: ViewStyle
}
