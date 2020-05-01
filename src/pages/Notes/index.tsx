import React, {useState, useEffect, useCallback, useContext} from 'react'
import {FlatList, ActivityIndicator as Indicator} from 'react-native'
import {ThemeContext} from 'styled-components/native'

import {Container, Error, Empty, EmptyText} from './styles'
import Period from './components/Period'
import SigaButton from '~/components/SigaButton'

import Api from '~/service/Api'

export default function Notes() {
  const [periods, setPeriods] = useState<PeriodType[] | undefined>()
  const [refreshing, setRefreshing] = useState(false)
  const [error, setError] = useState<string>()

  const theme = useContext(ThemeContext)

  // async function getLoginAndPassword(): Promise<string[]> {
  //   const user = await getUser()
  //   return [user!.login, user!.password]
  // }

  async function refreshNotes() {
    if (refreshing) return 0

    // const [login, password] = await getLoginAndPassword()
    try {
      setError('')
      setRefreshing(true)
      const {data, status} = await Api.post('/notes', {
        login,
        pass: password,
      })

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

        // realm.write(() => {
        //   const user = realm.objects<UserSchema>('User')[0]
        //   user.refSubjects = _RefSubjects
        //   user.notes = data
        // })
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setRefreshing(false)
    }
  }

  const _renderInfo = useCallback(() => {
    if (periods === undefined) return <Indicator color={theme.text.color.primary} />
    else if (periods?.length === 0)
      return <EmptyText>Clique no botão abaixo para carregar suas notas</EmptyText>
  }, [periods])

  const _render = useCallback(() => {
    const renderPeriod = ({item}: {item: PeriodType}) => <Period item={item} />

    return (
      <FlatList
        getItemLayout={(data, index) => ({length: 350, offset: 50 * index, index})}
        data={periods}
        keyExtractor={(i, index) => String(index)}
        renderItem={renderPeriod}
      />
    )
  }, [periods])

  // useEffect(() => {
  //   async function loadPeriods() {
  //     const user = await getUser()
  //     setPeriods(user!.notes)
  //   }
  //   loadPeriods()
  // }, [])

  return (
    <Container>
      {Boolean(periods?.toString()) && _render()}
      {Boolean(error) && <Error>{error}</Error>}
      {<Empty>{_renderInfo()}</Empty>}
      <SigaButton
        name="@reload"
        onPress={refreshNotes}
        indicator={refreshing}
        style={{alignSelf: 'center'}}
      />
    </Container>
  )
}
