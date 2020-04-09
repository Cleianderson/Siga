import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const ContainerImage = styled.View`
  margin-top:20px;
  justify-content: center;
`

export const Image = styled.Image`
  /* flex:1; */
  align-self: center;
`

export const Input = styled.TextInput`
  width: 70%;
  border-radius: 3px;
  border: 1px solid #aaa;
  border-radius: 3px;
  margin: 10px 0px;
  padding: 10px 15px;
  color: #444;
  font-size: 16px;
`

export const Submit = styled.TouchableOpacity`
  border: 1px solid #090;
  margin: 21px 5px 0 0;
  justify-content: center;
  border-radius:3px;
  width: 100px;
  height: 45px;
`

export const TextSubmit = styled.Text`
  color: #fff;
  font-weight: bold;
`

export const Error = styled.Text`
  color: #a00;
  font-weight: bold;
`