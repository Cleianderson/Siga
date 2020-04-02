import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createStackNavigator} from '@react-navigation/stack'

// import { Container } from './styles';
import Homepage from '../Home'
import Notespage from '../Notes'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

export default function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Início" component={Homepage} options={{
        headerTransparent:true,
        title:''
      }} />
      <Stack.Screen name="Notas" component={Notespage} />
    </Stack.Navigator>
  )
}
