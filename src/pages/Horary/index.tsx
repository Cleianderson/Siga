import React, {useState, useEffect} from 'react'

import {Container, Content} from './styles'
import SigaButton from '~/components/SigaButton'

import {getRealm} from '~/service/Realm'
import Api from '~/service/Api'

export default function Horary() {
  const [refreshing, setRefreshing] = useState<boolean>(false)
  const [user, setUser] = useState<UserSchema>()

  async function setHoraryToUser(data:HorarySchema){
    const realm = await getRealm()

    realm.write(()=>{
      const _user = realm.objects<UserSchema>('User')[0]
      
      _user.horary = data
    })
  }
  
  async function handleLoadHorary() {
    if (refreshing) return 0

    try {
      setRefreshing(true)
      const {data, status} = await Api.get(`/horary?login=${user?.login}&pass=${user?.password}`)
      if(status === 200) {
        await setHoraryToUser(data)
        setRefreshing(false)
      }
    } catch (error) {}
  }

  useEffect(()=>{
    async function loadUser(){
      const realm = await getRealm()

      const user = realm.objects<UserSchema>('User')[0]
      setUser(user)
    }
    loadUser()
  },[])
  
  return (
    <Container>
      <Content></Content>
      <SigaButton
        name="@reload"
        onPress={handleLoadHorary}
        indicator={refreshing}
        style={{alignSelf: 'center'}}
      />
    </Container>
  )
}
