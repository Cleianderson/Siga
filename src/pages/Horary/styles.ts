import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const Content = styled.View`
  flex: 1;
`

export const Title = styled.Text`
  /* flex: 1; */
  margin-top: 10px;
  text-align:center;
  color: ${props => props.theme.text.color.primary};
  font-size: 20px;
`
