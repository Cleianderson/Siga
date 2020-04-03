import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const Content = styled.View`
  flex: 1;
`

export const Welcome = styled.Text`
  font-size: 16px;
  color: #666;
  width: 100%;
  text-align: center;
`

export const ContainerActions = styled.View`
  flex-direction: row;
  justify-content: space-around;
`

export const Action = styled.TouchableOpacity`
  margin: 7px;
  border: 1px #347851 solid;
  border-radius: 3px;
  height: 35px;
  width: 50px;
  background: #363;
`

export const TextAction = styled.Text`
  color: #fff;
  font-weight: bold;
`
