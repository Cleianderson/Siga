export default class HorarySchema {
  static schema = {
    name: 'Horary',
    properties: {
      begin: 'string[]',
      end: 'string[]',
      days: 'ArrayString[]',
    },
  }

  public begin: string[]
  public end: string[]
  public days: string[][]

}
