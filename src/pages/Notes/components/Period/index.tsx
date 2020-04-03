import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import {Period, PeriodText, Subjects, Button, Header} from './styles'
import Subject from '../Subject'

export default function Notes({item}: {item: PeriodType}) {
  const [show, setShow] = useState<boolean>(false)

  function handleToggleShow() {
    setShow(!show)
  }

  function _render() {
    return item.subjects.map((subjectItem, index) => <Subject key={index} item={subjectItem} />)
  }

  return (
    <Period>
      <Header>
        <PeriodText>{item.name}</PeriodText>
        <Button onPress={handleToggleShow}>
          <Icon name={show ? 'minus-box' : 'plus-box'} color="#d64d09" size={20} />
        </Button>
      </Header>
      <Subjects style={{display: show ? 'flex' : 'none'}}>{_render()}</Subjects>
    </Period>
  )
}
