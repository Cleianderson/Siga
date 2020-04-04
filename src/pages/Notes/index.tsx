import React, {useState, useEffect} from 'react'
import {ActivityIndicator as Indicator} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import {Container, Content, Reload, Error} from './styles'
import Period from './components/Period'

import {getRealm} from '~/service/Realm'
import Api from '~/service/Api'
import {SigaButton} from '~/styles/styles'

export default function Notes() {
  const [periods, setPeriods] = useState<PeriodType[] | null>()
  const [refreshing, setRefreshing] = useState(false)
  const [error, setError] = useState<string>()

  async function getLoginAndPassword(): Promise<string[]> {
    let arrayLoginAndPassword = ['', '']
    const realm = await getRealm()
    realm.write(() => {
      const user = realm.objects<UserSchema>('User')[0]
      arrayLoginAndPassword = [user.login, user.password]
    })
    return arrayLoginAndPassword
  }

  async function refreshNotes() {
    if (refreshing) return 0

    const [login, password] = await getLoginAndPassword()
    try {
      setError('')
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
      setError(err.message)
    } finally {
      setRefreshing(false)
    }
  }

  function _render() {
    return periods?.map((item, index) => <Period key={index} item={item} />)
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
      <Error>{error}</Error>
      <Reload onPress={refreshNotes}>
        <SigaButton>
          {refreshing ? <Indicator color="#fff" /> : <Icon name="reload" color="#fff" size={25} />}
        </SigaButton>
      </Reload>
    </Container>
  )
}
