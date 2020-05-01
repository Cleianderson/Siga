import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`
export const Content = styled.View`
  flex:1;
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
  color: #444;
  width: 70%;
  font-size: 16px;

  border: 0px solid #090;
  border-bottom-width: 1px;
  
  margin: 20px 0px;
  padding: 0px 15px;
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