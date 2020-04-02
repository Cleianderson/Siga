import React, {useState} from 'react'

import {Container, Text, Items, Item, Data, Value} from './styles'

export default function Subject({item}: {item: Note}) {
  const [showNotes, setShowNotes] = useState<boolean>(false)

  function handleToggleNotes() {
    setShowNotes(!showNotes)
  }

  return (
    <Container onPress={handleToggleNotes}>
      <Text numberOfLines={showNotes ? undefined : 1}>{item.name}</Text>
      <Items style={{display: showNotes ? 'flex' : 'none'}}>
        <Item>
          <Data>Faltas</Data>
          <Value>{item.faults}</Value>
        </Item>
        <Item>
          <Data>VA1</Data>
          <Value>{item.va1}</Value>
        </Item>
        <Item>
          <Data>VA2</Data>
          <Value>{item.va2}</Value>
        </Item>
        <Item>
          <Data>VA3</Data>
          <Value>{item.va3}</Value>
        </Item>
        <Item>
          <Data>MED</Data>
          <Value>{item.med}</Value>
        </Item>
        <Item>
          <Data>VAFN</Data>
          <Value>{item.vaf}</Value>
        </Item>
        <Item>
          <Data>MFIN</Data>
          <Value>{item.mef}</Value>
        </Item>
      </Items>
    </Container>
  )
}
