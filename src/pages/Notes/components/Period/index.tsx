import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import {Period, PeriodText, Button, Header,Content} from './styles'
import Subject from '../Subject'
import {FlatList, Text} from 'react-native'

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
        <Button onPress={handleToggleShow}>
          <Icon name={show ? 'minus' : 'plus'} color="#d64d09" size={20} />
        </Button>
        <PeriodText>
          <Text style={{color: '#000'}}>Período: </Text>
          {item.name}
        </PeriodText>
      </Header>
      <Content>
        <FlatList
          initialNumToRender={1}
          getItemLayout={(data, index) => ({length: 300, offset: 30 * index, index})}
          style={{display: show ? 'flex' : 'none'}}
          data={item.subjects}
          keyExtractor={(item, index) => String(index)}
          renderItem={_render}
        />
      </Content>
    </Period>
  )
}
