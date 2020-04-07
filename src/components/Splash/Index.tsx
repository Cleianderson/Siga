import React from 'react'

import { Container, Content, Img } from './styles'

export default function Splash() {
    return (
        <Container>
            <Content>
                <Img source={require('~/assets/logo.png')} />
            </Content>
        </Container>
    )
}
