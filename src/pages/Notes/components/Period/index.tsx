import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import {Period, PeriodText, Button, Header} from './styles'
import Subject from '../Subject'
import {FlatList} from 'react-native'

export default function Notes({item}: {item: PeriodType}) {
  const [show, setShow] = useState<boolean>(false)

  function handleToggleShow() {
    setShow(!show)
  }

  function _render({item}: {item: NoteSchema}) {
    return <Subject item={item} />
  }

  return (
    <Period>
      <Header>
        <PeriodText>{item.name}</PeriodText>
        <Button onPress={handleToggleShow}>
          <Icon name={show ? 'minus-box' : 'plus-box'} color="#d64d09" size={20} />
        </Button>
      </Header>
      <FlatList
        initialNumToRender={1}
        getItemLayout={(data, index) => (
          {length: 300, offset: 30 * index, index}
        )}
        style={{display: show ? 'flex' : 'none'}}
        data={item.subjects}
        keyExtractor={(item, index) => String(index)}
        renderItem={_render}
      />
    </Period>
  )
}
