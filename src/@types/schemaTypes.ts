type NoteSchema = {
  id: number
  prof: string
  mat: string
  VA1: string
  VA2: string
  VA3?: string
  VAFN?: string
  M: string
  MFIN: string
  Faltas: string
}
type UserSchema = {
  login: string
  password: string
  name: string
  type: string
  horary: HorarySchema
  notes?: PeriodType[]
  org?: string | null
  model?: string | null
  refSubjects: {id: string; name: string; _class: string}[]
}
type PeriodType = {
  name: string
  subjects: NoteSchema[]
}
type HorarySchema = {
  begin: string[]
  end: string[]
  days: {item: string[]}[]
}
