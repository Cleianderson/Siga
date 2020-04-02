import React, {useState} from 'react'

import {Period, PeriodText, Subjects} from './styles'
import Subject from '../Subject'
import {PeriodType} from '~/typings/types'

export default function Notes({item}: {item: PeriodType}) {
  const [show, setShow] = useState<boolean>(false)

  function handleToggleShow() {
    setShow(!show)
  }

  return (
    <Period onPress={handleToggleShow} >
      <PeriodText>{item.name}</PeriodText>
      <Subjects style={{display: show ? 'flex' : 'none'}}>
        {item.subjects.map((subjectItem, index) => (
          <Subject key={index} item={subjectItem} />
        ))}
      </Subjects>
    </Period>
  )
}
