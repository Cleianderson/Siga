import styled from 'styled-components/native'

export const Container = styled.View`
  margin-top: 10px;
  /* flex:1; */
`

export const Content = styled.View`
  /* justify-content: center; */
  margin-left: 7px;
  /* margin-right: 7px; */
  padding: 10px;
  /* border-left-width: 1px; */
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Items = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 7px;
  /* padding: 10px 15px; */
`

export const Description = styled.Text`
  text-align: left;
  font-weight: bold;
`

export const Item = styled.View``

export const Data = styled.Text`
  /* background: #faebd7; */
  text-align: center;
`

export const Value = styled.Text`
  text-align: center;
`

export const Text = styled.Text`
  color: #347851;
  font-weight: bold;
  margin-right: 5px;
`
export const Prof = styled.Text`
  color: #347851;
  font-weight: bold;
`

export const Line = styled.View`
  background: ${props => props.theme.text.color.primary};
  height: 1px;
  flex:1;
`