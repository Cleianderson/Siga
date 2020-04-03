import React, {useState, useEffect} from 'react'
import {StatusBar} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {SigaButton} from '~/styles/styles'

import {Container, ContainerActions, Content, Welcome, Action, TextAction} from './styles'
import {getRealm} from '~/service/Realm'
import UserSchema from '~/utils/Schema/UserSchema'

export default function Home() {
  const [name, setName] = useState<string>()
  const navigation = useNavigation()

  useEffect(() => {
    async function loadUser() {
      const realm = await getRealm()

      const user = realm.objects<UserSchema>('User')[0]
      setName(user.name)
    }
    loadUser()
  }, [])

  return (
    <Container>
      <StatusBar backgroundColor="#363" />
      <Welcome>Olá, {name?.match(/\w{1,}/)}</Welcome>
      <Content></Content>
      <ContainerActions>
        <Action onPress={() => navigation.navigate('Notas')}>
          <SigaButton>
            <TextAction>Notas</TextAction>
          </SigaButton>
        </Action>
      </ContainerActions>
    </Container>
  )
}
