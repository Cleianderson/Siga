export default class PeriodSchema {
  static schema = {
    name: 'Period',
    primaryKey: 'name',
    properties: {
      name: 'string',
      subjects: 'Note[]',
    },
  }
}
