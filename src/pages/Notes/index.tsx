import React, {useState, useEffect} from 'react'
import {ActivityIndicator} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import {Container, Content, Reload} from './styles'
import Period from './components/Period'

import {getRealm} from '~/service/Realm'
import Api from '~/service/Api'
import {SigaButton} from '~/styles/styles'

export default function Notes() {
  const [periods, setPeriods] = useState<PeriodType[] | null>()
  const [refreshing, setRefreshing] = useState(false)

  async function getLoginAndPassword(): Promise<string[]> {
    let login = '',
      password = ''
    const realm = await getRealm()
    realm.write(() => {
      const user = realm.objects<UserSchema>('User')[0]
      login = user.login
      password = user.password
    })
    return [login, password]
  }

  async function refreshNotes() {
    if (refreshing) return 0

    const [login, password] = await getLoginAndPassword()
    try {
      setRefreshing(true)
      const {data, status} = await Api.get(`/notes?login=${login}&pass=${password}`)
      if (status === 200) {
        setPeriods(data)
        const realm = await getRealm()
        realm.write(() => {
          const user = realm.objects<UserSchema>('User')[0]
          user.notes = data
        })
      }
    } catch (err) {
      console.error(err)
    } finally {
      setRefreshing(false)
    }
  }

  function _render() {
    return periods?.map((item, index) => <Period key={index} item={item} />)
  }

  function _renderRText() {
    return refreshing ? (
      <ActivityIndicator color="#347851" />
    ) : (
      <Icon name="reload" color="#fff" size={25} />
    )
  }

  useEffect(() => {
    async function loadPeriods() {
      const realm = await getRealm()
      realm.write(() => {
        const user = realm.objects<UserSchema>('User')[0]
        setPeriods(user.notes)
      })
    }
    loadPeriods()
  }, [])

  return (
    <Container>
      <Content>{_render()}</Content>
      <Reload onPress={refreshNotes}>
        <SigaButton>{_renderRText()}</SigaButton>
      </Reload>
    </Container>
  )
}
