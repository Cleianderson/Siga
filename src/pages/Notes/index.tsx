import React, {useState, useEffect} from 'react'
import {FlatList} from 'react-native'

import {Container, Error, Empty} from './styles'
import Period from './components/Period'

import {getRealm} from '~/service/Realm'
import Api from '~/service/Api'
import SigaButton from '~/components/SigaButton'

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
        const _RefSubjects: {id: string; name: string; _class: string}[] = []

        data.forEach((period: {subjects: NoteSchema[]}) => {
          period.subjects.forEach((subject: NoteSchema) => {
            // get the first sequence of characters ( >>0000<< - NAME_OF_MATTER - CLASS )
            const id = subject.mat.match(/\w{1,}/)![0]

            // get the second sequence of characters ( 0000 - >>NAME_OF_MATTER<< - CLASS )
            const name = subject.mat.match(/\s[a-zA-Z\u00C0-\u00FF ]+\s/)![0].trim()

            // get the thirty sequence of characters ( 0000 - NAME_OF_MATTER - >>CLASS<< )
            const _class = subject.mat.match(/\w{1,}$/)![0]

            _RefSubjects.push({id, name, _class})
          })
        })

        const realm = await getRealm()
        realm.write(() => {
          const user = realm.objects<UserSchema>('User')[0]
          user.refSubjects = _RefSubjects
          user.notes = data
        })
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setRefreshing(false)
    }
  }

  const _render = ({item}: {item: PeriodType}) => {
    return <Period item={item} />
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
      <FlatList
        getItemLayout={(data, index) => ({length: 350, offset: 50 * index, index})}
        data={periods}
        keyExtractor={(i, index) => String(index)}
        renderItem={_render}
        ListEmptyComponent={
          <Empty>
            Se for a primeira vez que você acessa essa tela, por favor clique no botão abaixo
          </Empty>
        }
      />
      <Error>{error}</Error>
      <SigaButton
        name="@reload"
        onPress={refreshNotes}
        indicator={refreshing}
        style={{alignSelf: 'center'}}
      />
    </Container>
  )
}
