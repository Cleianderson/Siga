import React, {useState} from 'react'
import {ActivityIndicator as Indicator} from 'react-native'

import SigaButton from '~/components/SigaButton'
import {Container, Image, Input, Submit, TextSubmit, ContainerImage, Error} from './styles'

import Api from '~/service/Api'
import {getRealm} from '~/service/Realm'

type LoginProps = {state: [string, React.Dispatch<React.SetStateAction<string>>]}

const Login = ({state}: LoginProps) => {
  const [isLoged, setIsLoged] = state
  const [login, setLogin] = useState<string>()
  const [error, setError] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [submiting, setSubmiting] = useState<boolean>(false)

  const actions: {[key1: number]: (data: any) => Promise<void> | void} = {
    200: async (data: any) => {
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
      setIsLoged('loged')
    },
    400: (data: {error: string}) => {
      setError(data.error)
      setSubmiting(false)
    },
  }

  async function handleSubmit() {
    if (submiting) return 0
    try {
      setSubmiting(true)
      setError('')
      const {status, data} = await Api.get(`/login?login=${login}&pass=${password}`, {
        validateStatus: () => true,
      })
      const functionByStatus = actions[status]
      if (functionByStatus) functionByStatus(data)
    } catch (error) {
      actions[400]({error: error.message})
    }
  }

  return (
    <>
      <ContainerImage>
        <Image source={require('~/assets/logo.png')} />
      </ContainerImage>
      <Container>
        <Error>{error}</Error>
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
        <SigaButton name="Entrar" onPress={handleSubmit} indicator={submiting} />
      </Container>
    </>
  )
}

export default Login
