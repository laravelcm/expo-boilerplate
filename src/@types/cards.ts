import { ReactElement } from 'react'
import { ViewStyle } from 'react-native'

export interface IntroCardInterface {
  title: string;
  description: string;
  svg: ReactElement;
  style?: ViewStyle;
}
