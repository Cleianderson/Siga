import React, {useState, useEffect} from 'react'
import {StatusBar} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import SigaButton from '~/components/SigaButton'

import {Container, ContainerActions, Content, Welcome, Info, Item, Value} from './styles'
import {getRealm} from '~/service/Realm'
import UserSchema from '~/utils/Schema/UserSchema'

export default function Home() {
  const [user, setUser] = useState<UserSchema>()
  const navigation = useNavigation()

  useEffect(() => {
    async function loadUser() {
      const realm = await getRealm()

      const user = realm.objects<UserSchema>('User')[0]
      setUser(user)
    }
    loadUser()
  }, [])

  return (
    <Container>
      <StatusBar backgroundColor="#363" />
      <Welcome>Seja bem-vindx</Welcome>
      <Info>
        <Item
          style={{
            paddingHorizontal: 7,
            position: 'absolute',
            left: 10,
            top: -15,
            backgroundColor: '#eee',
          }}>
          Informações
        </Item>
        <Item>
          Nome: <Value>{user?.name}</Value>
        </Item>
        <Item>
          Perfil: <Value>{user?.type}</Value>
        </Item>
        <Item>
          Orgão: <Value>{user?.org}</Value>
        </Item>
        <Item>
          Módulo: <Value>{user?.model}</Value>
        </Item>
      </Info>
      <Content></Content>
      <ContainerActions>
        <SigaButton name="Notas" onPress={() => navigation.navigate('Notas')} />
        <SigaButton name="Horário" onPress={() => navigation.navigate('Horário')} />
      </ContainerActions>
    </Container>
  )
}
