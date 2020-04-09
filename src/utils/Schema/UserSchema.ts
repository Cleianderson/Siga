
export default class StudentSchema {
  static schema = {
    name: 'User',
    primaryKey: 'login',
    properties: {
      login: 'string',
      password: 'string',
      notes: {type: 'Period[]', default: []},
      horary: 'Horary?',
      refSubjects: {type:'RefSubjects[]',default:[]},
      name: 'string',
      type: 'string',
      org: 'string?',
      model: 'string?',
    },
  }
}
