import React from 'react'
import {StatusBar} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import {Container, ContainerActions, Content, Welcome, Info, Item, Value, ImageSiga} from './styles'

import SigaButton from '~/components/SigaButton'

type PropsStudent = {user: UserSchema}

export default function Student({user}: PropsStudent) {
  const navigation = useNavigation()

  return (
    <Container>
      <StatusBar backgroundColor="#363" />
      <ImageSiga source={require('~/assets/logo.png')} />
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
