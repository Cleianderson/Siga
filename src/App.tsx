import 'react-native-gesture-handler'
import React, {useEffect, useState, useCallback} from 'react'
import {ThemeProvider} from 'styled-components/native'
import {NavigationContainer} from '@react-navigation/native'

import {getRealm} from './service/Realm'
import Student from './pages/Student'
import Login from './pages/Login'

import light from './styles/themes/light'

const App = () => {
  const [isLoged, setIsLoged] = useState<boolean>(false)

  const _render = useCallback(() => {
    if (isLoged) {
      return (
        <NavigationContainer>
          <ThemeProvider theme={light}>
            <Student />
          </ThemeProvider>
        </NavigationContainer>
      )
    }
    return <Login state={[isLoged, setIsLoged]} />
  }, [isLoged])

  useEffect(() => {
    async function loadUser() {
      const realm = await getRealm()
      setIsLoged(!realm.objects('User').isEmpty())
    }
    loadUser()
  }, [])

  return _render()
}

export default App
