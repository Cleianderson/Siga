import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  hitSlop:{top:5,bottom:5,left:5,right:5}
})`
  margin-top: 10px;
  margin-bottom: 10px;
`

export const Items = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`

export const Item = styled.View`
  justify-content: center;
  align-items: center;
  /* border: 1px #ccc solid; */
  min-width: 50px;
`

export const Data = styled.Text`
  background: #faebd7;
  width: 100%;
  text-align: center;
`

export const Value = styled.Text`
  background: #e9e9e9;
  width: 100%;
  text-align: center;
`

export const Text = styled.Text`
  color: #347851;
  align-self: center;
`