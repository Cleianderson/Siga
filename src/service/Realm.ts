import realm from 'realm'

import Schemas from '~/utils/Schema'

export function getRealm() {
  return realm.open({schema: Schemas})
}

export async function getUser(callback?: () => void): Promise<UserSchema & Realm.Object | undefined> {
  const realm = await getRealm()
  const user = realm.objects<UserSchema>('User')

  if (callback) callback()

  if (user.length > 1) {
    throw new Error('There is more one user')
  } else if (user.length == 1) {
    return user[0]
  }
  return undefined
}
