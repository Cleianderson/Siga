import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const Content = styled.View`
  flex: 1;
`

export const Welcome = styled.Text`
  margin-top: 10px;
  font-size: 20px;
  color: #666;
  width: 100%;
  text-align: center;
`

export const Info = styled.View`
border: ${props => props.theme.border.content};
border-radius: ${props => props.theme.border.radius};
margin: 10px;
margin-top: 20px;
padding: 15px 10px;
`

export const Item = styled.Text`
  margin:3px;
  color: ${props => props.theme.text.color.primary};
`

export const Value = styled.Text`
  color: ${props => props.theme.text.color.secondary};
`

export const ContainerActions = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`

export const Action = styled.TouchableOpacity`
  margin: 7px;
  border: 1px #347851 solid;
  border-radius: 3px;
  height: 35px;
  width: 70px;
  background: #363;
`

export const TextAction = styled.Text`
  color: ${props => props.theme.bg.primary};
  font-weight: bold;
`

export const ImageSiga = styled.Image`
  width: 105px; 
  height: 40px; 
  align-self: center; 
  margin: 15px;
  margin-bottom: 0px;
`