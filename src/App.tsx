import 'react-native-gesture-handler'
import React, {useEffect, useState, useCallback} from 'react'
import {ThemeProvider} from 'styled-components/native'
import {NavigationContainer} from '@react-navigation/native'

import {getRealm} from './service/Realm'
import Student from './pages/Student'
import Login from './pages/Login'

import light from './styles/themes/light'
import Splash from './components/Splash/Index'
import { DicJSX } from './@types/types'

const App = () => {
  const [isLoged, setIsLoged] = useState<string>('not_loaded')

  const componentToRender:DicJSX  = {
      not_loaded: <Splash />,
      not_loged: <Login state={[isLoged, setIsLoged]} />,
      loged: (<NavigationContainer>
          <ThemeProvider theme={light}>
            <Student />
          </ThemeProvider>
        </NavigationContainer>)
  }

  const _render = useCallback(() => {
    return componentToRender[isLoged]
  }, [isLoged])

  useEffect(() => {
    async function loadUser() {
      const realm = await getRealm()
      setIsLoged(realm.objects('User').isEmpty()?'not_loged':'loged')
    }
    loadUser()
  }, [])

  return _render()
}

export default App
