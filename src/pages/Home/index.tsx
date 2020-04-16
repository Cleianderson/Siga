import React, {useState, useEffect, useCallback} from 'react'

import StudentHome from './Homes/Student'
import TeacherHome from './Homes/Teacher'

import {getUser} from '~/service/Realm'
import Splash from '~/components/Splash/Index'

export default function Home() {
  const [user, setUser] = useState<UserSchema>()

  const renderHomeByUserType = useCallback(() => {
    if (user?.type.toLowerCase() === 'discente') {
      return <StudentHome user={user} />
    } else if (user?.type.toLowerCase() === 'docente') {
      return <TeacherHome />
    }
    return <Splash />
  }, [user])

  useEffect(() => {
    const loadUser = async () => setUser(await getUser())
    loadUser()
  }, [])

  return renderHomeByUserType()
}
