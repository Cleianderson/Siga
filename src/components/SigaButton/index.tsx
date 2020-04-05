import React, {useCallback} from 'react'
import {ActivityIndicator as Indicator, StyleProp, ViewStyle} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Gradient from 'react-native-linear-gradient'

import {Text, Touchable} from './styles'

type SigaButtonType = {
  name: string
  onPress: () => void
  indicator?: boolean
  style?: StyleProp<ViewStyle>
}

export default function SigaButton({name, onPress, indicator, style}: SigaButtonType) {
  const _renderContent = useCallback(() => {
    if (indicator) {
      return <Indicator color="#fff" size={25} />
    } else {
      if (name.charAt(0) === '@') {
        return <Icon name={name.substr(1)} size={25} color="#fff" />
      } else {
        return <Text>{name}</Text>
      }
    }
  }, [indicator, name])

  return (
    <Touchable style={style} onPress={onPress}>
      <Gradient
        colors={['#090', '#363']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {_renderContent()}
      </Gradient>
    </Touchable>
  )
}
