import React, {useState, useContext} from 'react'

import SigaButton from '~/components/SigaButton'
import {Container, Content, Image, Input, ContainerImage, Error} from './styles'

import Context from '~/contexts/AppContext'
import Api from '~/service/Api'

const Login = () => {
  const [login, setLogin] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [error, setError] = useState<string>()
  const [submiting, setSubmiting] = useState<boolean>(false)

  const {setIsLoged} = useContext(Context)

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

      // realm.write(() => {
      //   realm.create('User', user)
      // })
      setSubmiting(false)
      setError('')
      setIsLoged(true)
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
      const {status, data} = await Api.post(
        '/login',
        {
          login,
          pass: password,
        },
        {
          validateStatus: () => true,
        },
      )
      const functionByStatus = actions[status]
      if (functionByStatus) functionByStatus(data)
    } catch (error) {
      actions[400]({error: error.message})
    }
  }

  return (
    <Container>
      <ContainerImage>
        <Image source={require('~/assets/logo.png')} />
      </ContainerImage>
      <Content>
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
        <Error>{error}</Error>
      </Content>
      <SigaButton
        name="Entrar"
        onPress={handleSubmit}
        indicator={submiting}
        style={{width: '45%', maxWidth: 180, alignSelf: 'center'}}
      />
    </Container>
  )
}

export default Login
