export default class HorarySchema {
  static schema = {
    name: 'Horary',
    properties: {
      begin: 'string[]',
      end: 'string[]',
      mon: 'string[]',
      tue: 'string[]',
      wed: 'string[]',
      thu: 'string[]',
      fri: 'string[]',
      sat: 'string[]',
    },
  }

  public begin: string[]
  public end: string[]
  public mon: string[]
  public tue: string[]
  public wed: string[]
  public thu: string[]
  public fri: string[]
  public sat: string[]
}
