import React, {useState} from 'react'
import {ActivityIndicator as Indicator} from 'react-native'

import SigaButton from '~/components/SigaButton'
import {Container, Image, Input, Submit, TextSubmit, ContainerImage, Error} from './styles'

import Api from '~/service/Api'
import {getRealm} from '~/service/Realm'

const Login = ({state}: {state: [boolean, React.Dispatch<React.SetStateAction<boolean>>]}) => {
  const [isLoged, setIsLoged] = state
  const [login, setLogin] = useState<string>()
  const [error, setError] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [submiting, setSubmiting] = useState<boolean>(false)

  async function handleSubmit() {
    if (submiting) return 0
    try {
      setSubmiting(true)
      setError('')
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

        realm.write(() => {
          realm.create('User', user)
        })
        setSubmiting(false)
        setError('')
        setIsLoged(true)
      }
    } catch (error) {
      setError(error.message)
      setSubmiting(false)
    }
  }

  return (
    <>
      <ContainerImage>
        <Image source={require('~/assets/logo.png')} />
      </ContainerImage>
      <Container>
        <Input
          value={login}
          onChangeText={setLogin}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Login/CPF"
        />
        <Input
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          secureTextEntry={true}
          placeholder="Senha"
        />
        <SigaButton name="Entrar" onPress={handleSubmit} />
      </Container>
    </>
  )
}

export default Login
