import 'react-native-gesture-handler'
import React, {useEffect, useState, useCallback} from 'react'

import {getUser} from './service/Realm'

import Application from './pages/Application'
import Login from './pages/Login'
import Splash from './components/Splash/Index'

const App = () => {
  const [isLoged, setIsLoged] = useState<string>('not_loaded')

  const componentToRender: DicJSX = {
    not_loaded: <Splash />,
    not_loged: <Login state={[isLoged, setIsLoged]} />,
    loged: <Application />,
  }

  const _render = useCallback(() => {
    return componentToRender[isLoged]
  }, [isLoged])

  useEffect(() => {
    async function loadUser() {
      const user = await getUser()
      setIsLoged(user ? 'loged' : 'not_loged')
    }
    loadUser()
  }, [])

  return _render()
}

export default App
