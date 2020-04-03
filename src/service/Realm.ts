import realm from 'realm'

import UserSchema from '../utils/Schema/UserSchema'
import NoteSchema from '../utils/Schema/NoteSchema'
import PeriodSchema from '../utils/Schema/PeriodSchema'

export function getRealm() {
  return realm.open({
    schema: [UserSchema, NoteSchema, PeriodSchema],
  })
}
