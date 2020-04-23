import React, {useState, useEffect} from 'react'
import {SectionList} from 'react-native'

import {Container, Content, Title} from './styles'
import SigaButton from '~/components/SigaButton'

import {getRealm, getUser} from '~/service/Realm'
import Api from '~/service/Api'
import Day from './Components/Day'

const refDays = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']

export default function Horary() {
  const [refreshing, setRefreshing] = useState<boolean>(false)
  const [data, setData] = useState<SectionData>([])
  const [user, setUser] = useState<UserSchema>()

  function transformRealmDataToSectionList(_user: UserSchema) {
    let _data: SectionData = []
    _user.horary.days.forEach((value, index) => {
      const _value: {id: string; name: string; _class: string; horary: string}[] = []

      value.item.forEach((item) => {
        if (item.trim() !== '') {
          const id = item.match(/^\d{1,}/)![0]
          const matter = _user.refSubjects.filter((value) => value.id === id)[0]
          const horary = item.match(/(\d{2}:\d{2}) às (\d{2}:\d{2})/)![0]

          if (matter) _value.push({id, name: matter.name, _class: matter._class, horary})
        }
      })

      if (!_data[index]) _data[index] = {title: refDays[index], data: _value}
    })
    return _data
  }

  function transformArrayInSectionList(days: string[][]) {
    let _data: SectionData = []

    days.forEach((value, index) => {
      const _value: {id: string; name: string; _class: string; horary: string}[] = []

      value.forEach((item) => {
        if (item.trim() !== '') {
          const id = item.match(/^\d{1,}/)![0]
          const refSubject = user?.refSubjects.filter((subItem) => subItem.id === id)[0]
          const horary = item.match(/(\d{2}:\d{2}) às (\d{2}:\d{2})/)![0]

          _value.push({id, name: refSubject!.name, _class: refSubject!._class, horary: horary})
        }
      })

      _data.push({title: refDays[index], data: _value})
    })
    return _data
  }

  async function setHoraryToUser(data: any) {
    const _days: {item: string[]}[] = []

    data.days.forEach((value: string[], index: number) => {
      if (!_days[index]) _days[index] = {item: []}
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
      const {data: resData, status} = await Api.post('/horary', {
        login: user!.login,
        pass: user!.password,
      })
      if (status === 200) {
        const days: string[][] = resData.days
        setData(transformArrayInSectionList(days))
        setRefreshing(false)
        setHoraryToUser(resData)
      }
    } catch (error) {}
  }

  const _renderDays = ({item}:any) => <Day item={item} />

  useEffect(() => {
    async function loadUser() {
      const _user = await getUser()
      setUser(_user)
      if (_user!.horary) setData(transformRealmDataToSectionList(_user!))
    }
    loadUser()
  }, [])

  return (
    <Container>
      <Content>
        <SectionList
          sections={data}
          keyExtractor={(item, index) => item.id + index}
          renderItem={_renderDays}
          renderSectionHeader={({section: {title}}) => <Title>{title}</Title>}
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
