import React from 'react'

import {Container, Description, Value, Header, Title, Content} from './styles'

export default function Day({item}: any) {
  return (
    <Container>
      <Header>
        <Title>
          <Description>{item.name}</Description> das {item.horary}
        </Title>
      </Header>
      <Content>
        <Description>
          Id: <Value>{item.id}</Value>
        </Description>
        <Description>
          Turma: <Value>{item._class}</Value>
        </Description>
      </Content>
    </Container>
  )
}
