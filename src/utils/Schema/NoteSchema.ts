export default class NoteSchema {
  static schema = {
    name: 'Note',
    properties: {
      prof: 'string',
      mat: 'string',
      VA1: 'string?',
      VA2: 'string?',
      VA3: 'string?',
      VAFN: 'string?',
      M: 'string?',
      MFIN: 'string?',
      Faltas: 'string',
    },
  }

  public prof: string
  public mat: string
  public VA1: string
  public VA2: string
  public VA3?: string
  public VAFN?: string
  public M: string
  public MFIN: string
  public Faltas: string
 
}
