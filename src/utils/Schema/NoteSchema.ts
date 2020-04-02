export default class NoteSchema {
  static schema = {
    name: 'Note',
    primaryKey: 'id',
    properties: {
      id: 'int',
      name: 'string',
      va1: 'float',
      va2: 'float',
      va3: 'float?',
      vaf: 'float?',
      med: 'float',
      mef: 'float',
      faults: 'int',
    },
  }

  public id: number
  public name: string
  public va1: number
  public va2: number
  public va3?: number
  public vaf?: number
  public med: number
  public mef: number
  public faults: number
}
