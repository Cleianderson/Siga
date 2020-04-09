import realm from 'realm'

import UserSchema from '../utils/Schema/UserSchema'
import NoteSchema from '../utils/Schema/NoteSchema'
import PeriodSchema from '../utils/Schema/PeriodSchema'
import HorarySchema from '../utils/Schema/HorarySchema'
import ArrayString from '../utils/Schema/StringArraySchema'
import RefSubjects from '../utils/Schema/RefSubjectSchema'

export function getRealm() {
  return realm.open({
    schema: [UserSchema, NoteSchema, PeriodSchema, HorarySchema, ArrayString, RefSubjects],
  })
}
