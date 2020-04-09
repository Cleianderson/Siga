import React, {useState, useEffect} from 'react'
import {SectionList, Text} from 'react-native'

import {Container, Content} from './styles'
import SigaButton from '~/components/SigaButton'

import {getRealm} from '~/service/Realm'
import Api from '~/service/Api'

export default function Horary() {
  const [refreshing, setRefreshing] = useState<boolean>(false)
  const [data, setData] = useState<SectionData>([])
  const [user, setUser] = useState<UserSchema>()

  const refDays = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']

  function transformRealmDataToSectionList(days: {item:string[]}[]){
    let _data: SectionData = []
    days.forEach((value, index) => {
      if(!_data[index]) _data[index] = {title:refDays[index],data:value.item}
    })
    return _data
  
  }
  
  function transformArrayInSectionList(days: string[][]) {
    let _data: SectionData = []
    days.forEach((value, index) => {
      _data.push({title: refDays[index], data: value})
    })
    return _data
  }

  async function setHoraryToUser(data:any) {
    const _days: {item:string[]}[] = [] 

    data.days.forEach((value: string[],index: number)=>{
      if(!_days[index]) _days[index] = {item:[]}
      _days[index].item = value
    })
    data.days = _days
    const realm = await getRealm()
    
    realm.write(() => {
      const _user = realm.objects<UserSchema>('User')[0]

      _user.horary = data
    })
  }

  async function handleLoadHorary() {
    if (refreshing) return 0

    try {
      setRefreshing(true)
      const {data: resData, status} = await Api.get(
        `/horary?login=${user?.login}&pass=${user?.password}`,
      )
      if (status === 200) {
        const days: string[][] = resData.days
        setData(transformArrayInSectionList(days))
        setRefreshing(false)
        setHoraryToUser(resData)
      }
    } catch (error) {}
  }

  useEffect(() => {
    async function loadUser() {
      const realm = await getRealm()

      const _user = realm.objects<UserSchema>('User')[0]
      if(_user.horary) setData(transformRealmDataToSectionList(_user.horary.days))
      setUser(_user)
    }
    loadUser()
  }, [])

  return (
    <Container>
      <Content>
        <SectionList
          sections={data}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => <Text>{item}</Text>}
          renderSectionHeader={({section: {title}}) => <Text>{title}</Text>}
        />
      </Content>
      <SigaButton
        name="@reload"
        onPress={handleLoadHorary}
        indicator={refreshing}
        style={{alignSelf: 'center'}}
      />
    </Container>
  )
}
