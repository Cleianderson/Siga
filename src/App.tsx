import 'react-native-gesture-handler'
import React, {useState, useEffect} from 'react'
import {StatusBar, ActivityIndicator} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {NavigationContainer} from '@react-navigation/native'

import {Container, Image, Input, Submit, TextSubmit, ContainerImage} from './styles/styles'
import Api from './service/Api'
import {getRealm} from './service/Realm'

import Student from './pages/Student'

const App = () => {
  const [login, setLogin] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [isLoged, setIsLoged] = useState<boolean>(false)
  const [submiting, setSubmiting] = useState<boolean>(false)

  async function handleSubmit() {
    if (!submiting) {
      try {
        setSubmiting(true)
        const {status, data} = await Api.get(`/login?login=${login}&pass=${password}`)
        if (status === 200) {
          const user = {
            login,
            password,
            name: data.name,
            type: data.func,
            org: data.org,
            model: data.mode,
          }

          const realm = await getRealm()
          setSubmiting(false)

          realm.write(() => {
            realm.create('User', user)
          })
        }
      } catch (error) {
        setSubmiting(false)
      }
    }
  }

  useEffect(() => {
    async function loadUser() {
      const realm = await getRealm()
      setIsLoged(!realm.objects('User').isEmpty())
    }
    loadUser()
  }, [submiting])

  if (isLoged) {
    return (
      <NavigationContainer>
        <Student />
      </NavigationContainer>
    )
  }
  return (
    <>
      <StatusBar backgroundColor="#363" />
      <ContainerImage>
        <Image source={require('./assets/logo.png')} />
      </ContainerImage>
      <Container>
        <Input
          value={login}
          onChangeText={(text) => setLogin(text)}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Login/CPF"
        />
        <Input
          value={password}
          onChangeText={(text) => setPassword(text)}
          autoCapitalize="none"
          secureTextEntry={true}
          placeholder="Senha"
        />
        <Submit onPress={handleSubmit}>
          <LinearGradient
            style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}
            colors={['#090', '#363']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}>
            {submiting ? <ActivityIndicator color="#fff" /> : <TextSubmit>Entrar</TextSubmit>}
          </LinearGradient>
        </Submit>
      </Container>
    </>
  )
}

export default App
