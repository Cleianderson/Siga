import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {ThemeProvider} from 'styled-components/native'

import light from '~/styles/themes/light'

import Home from '../Home'
import Notes from '../Notes'
import Horary from '../Horary'

const Stack = createStackNavigator()

export default function Application() {
  return (
    <ThemeProvider theme={light}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Início">
          <Stack.Screen
            name="Início"
            component={Home}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen name="Notas" component={Notes} />
          <Stack.Screen name="Horário" component={Horary} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}
