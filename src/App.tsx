import 'react-native-gesture-handler'
import React, {useEffect,useState} from 'react'
import {NavigationContainer} from '@react-navigation/native'

import {getRealm} from './service/Realm'
import Student from './pages/Student'
import Login from './pages/Login'

const App = () => {
  const [isLoged, setIsLoged] = useState<boolean>(false)
  
  const _render = () => {
    if (isLoged) {
      return (
        <NavigationContainer>
          <Student />
        </NavigationContainer>
      )
    }
    return <Login state={[isLoged, setIsLoged]} />
  }

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
