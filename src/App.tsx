import 'react-native-gesture-handler'
import React, {useEffect, useContext, useState} from 'react'

import AppContext from '~/contexts/AppContext'

import {getObj} from '~/service/Storage'

import Application from './pages/Application'
import Login from './pages/Login'
import Splash from './components/Splash/Index'

const App = () => {
  const [isLoged, setIsLoged] = useState<boolean | undefined>(undefined)
  const [user,setUser] = useState<UserSchema | undefined>(undefined)
  
  const render = () => {
    if (isLoged === true) return <Application />
    else if (isLoged === false) return <Login />
    else return <Splash />
  }

  useEffect(() => {
    async function loadUser() {
      const _user = await getObj<UserSchema>('@SIGA:user')
      setIsLoged(_user ? true : false)
      if(_user) setUser(_user)
    }
    loadUser()
  }, [])

  return (
    <AppContext.Provider value={{isLoged, setIsLoged, user}}>
      {render()}
    </AppContext.Provider>
  )
}

export default App
