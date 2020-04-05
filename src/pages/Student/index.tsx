import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Home from '../Home'
import Notes from '../Notes'
import Horary from '../Horary'

const Stack = createStackNavigator()

export default function Student() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Início" component={Home} options={{
        headerTransparent:true,
        title:''
      }} />
      <Stack.Screen name="Notas" component={Notes} />
      <Stack.Screen name="Horário" component={Horary} />
    </Stack.Navigator>
  )
}
