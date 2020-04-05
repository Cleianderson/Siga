import React from 'react'

import {Container, Content} from './styles'
import SigaButton from '~/components/SigaButton'

export default function Horary() {
  return (
    <Container>
      <Content></Content>
      <SigaButton name="@reload" onPress={()=>{}} style={{alignSelf:'center'}} />
    </Container>
  )
}
