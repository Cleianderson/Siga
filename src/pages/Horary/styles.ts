import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const Content = styled.View`
  flex: 1;
`

export const Title = styled.Text`
  /* flex: 1; */
  margin-top: 20px;
  text-align:center;
  color: ${props => props.theme.text.color.primary};
  font-size: 20px;
`

export const ItemContainer = styled.View`
  margin:10px;
  border: 1px solid #999;
  border-radius: 3px;
  padding: 10px 15px;
`
export const ItemDescription = styled.Text`
  color: ${props => props.theme.text.color.primary};
`

export const ItemValue = styled.Text`
  color: #444;
`

export const Button = styled.TouchableOpacity`
  margin: 7px;
  border: 1px #347851 solid;
  border-radius: 3px;
  height: 35px;
  width: 70px;
  background: #363;
`
