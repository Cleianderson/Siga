import styled from 'styled-components/native'

export const Container = styled.View`
  margin: 10px;
  /* border-bottom-width: 1px; */
  border-radius: 3px;
  /* padding: 10px 15px; */
`

export const Content = styled.View`
  flex-direction: row;
`

export const Header = styled.View``

export const Title = styled.Text`
  /* text-align:center; */
  color: #444;
  font-weight: bold;
`

export const Description = styled.Text`
  color: ${(props) => props.theme.text.color.primary};
  margin-right: 10px;
  font-weight: bold;
`

export const Value = styled.Text`
  color: #444;
`
