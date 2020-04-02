import Note from './NoteSchema'

export default class StudentSchema {
  static schema = {
    name: 'User',
    primaryKey: 'login',
    properties: {
      login: 'string',
      password: 'string',
      notes: {type:'Note[]',default:[]},
      name: 'string',
      type: 'string',
      org: 'string?',
      model: 'string?',
    },
  }

  public login: string
  public password: string
  public name: string
  public type: string
  public notes?: Note[] | null
  public org?: string | null
  public model?: string | null
}
