import styled from 'styled-components/native'

export const Container = styled.View`
  flex:1;
`

export const Content = styled.ScrollView`
  flex:1;
`

export const Reload = styled.TouchableOpacity`
  border: 1px #ccc solid;
  margin: 7px;
  height: 35px;
  width:100px;
  border-radius:3px;
  align-self:center;
`
export const Error = styled.Text`
  color: #a00;
  font-weight: bold;
  text-align: center;
`
export const Empty = styled.Text`
  flex:1;
  color: #666;
  font-weight: bold;
  text-align: center;
  justify-content:center;
  align-items: center;
`