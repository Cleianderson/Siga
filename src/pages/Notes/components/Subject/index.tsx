import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import {
  Content,
  Container,
  Text,
  Prof,
  Items,
  Item,
  Data,
  Value,
  Header,
  Description,
  Line,
} from './styles'
import {TouchableOpacity} from 'react-native-gesture-handler'

export default function Subject({item}: {item: NoteSchema}) {
  const [showNotes, setShowNotes] = useState<boolean>(false)

  const formatMatter = (matter: string, cut?:boolean) => {
    const onlyMatter = matter.match(/([^-]{1,})/g)![1].trim()
    if (onlyMatter.length > 24 && cut) {
      return onlyMatter.substr(0, 21) + '...'
    }
    return onlyMatter
  }

  function handleToggleNotes() {
    setShowNotes(!showNotes)
  }

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={handleToggleNotes}>
          <Icon name={showNotes ? 'minus' : 'plus'} color="#363" size={20} />
        </TouchableOpacity>
        {<Text>{formatMatter(item.mat,!showNotes)}</Text>}
        <Line />
      </Header>
      <Content style={{display: showNotes ? 'flex' : 'none'}}>
        <Description>
          Docente(s): <Prof>{item.prof}</Prof>
        </Description>
        <Items>
          <Item>
            <Data>Faltas</Data>
            <Value>{item.Faltas}</Value>
          </Item>
          <Item>
            <Data>VA1</Data>
            <Value>{item.VA1}</Value>
          </Item>
          <Item>
            <Data>VA2</Data>
            <Value>{item.VA2}</Value>
          </Item>
          <Item>
            <Data>VA3</Data>
            <Value>{item.VA3}</Value>
          </Item>
          <Item>
            <Data>MED</Data>
            <Value>{item.M}</Value>
          </Item>
          <Item>
            <Data>VAFN</Data>
            <Value>{item.VAFN}</Value>
          </Item>
          <Item>
            <Data>MFIN</Data>
            <Value>{item.MFIN}</Value>
          </Item>
        </Items>
      </Content>
    </Container>
  )
}
