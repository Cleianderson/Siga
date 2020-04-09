export default class HorarySchema {
  static schema = {
    name: 'ArrayString',
    properties: {
      item: 'string[]',
    },
  }

  public item: string[]

}
