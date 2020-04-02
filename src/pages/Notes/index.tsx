import React, {useState} from 'react'

import {Container} from './styles'
import {PeriodType} from '~/typings/types'
import Period from './components/Period'

const item: PeriodType = {
  name: '2019.2',
  subjects: [
    {
      id: 1,
      faults: 0,
      med: 5,
      mef: 5,
      name: 'FUNDAMENTOS FILOSÓFICOS HISTÓRICOS E SOCIOLÓGICOS DA EDUCAÇÃO',
      va1: 7.0,
      va2: 5.35,
      va3: 4.75,
      vaf: 10.0,
    },
  ],
}

export default function Notes() {
  return (
    <Container>
      <Period item={item} />
    </Container>
  )
}
