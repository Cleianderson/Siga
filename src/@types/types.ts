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
  notes?: PeriodType[] | null
  org?: string | null
  model?: string | null
}
type PeriodType = {name: string; subjects: NoteSchema[]}
type HorarySchema = {
  begin: string[]
  end: string[]
  mon: string[]
  tue: string[]
  wed: string[]
  thu: string[]
  fri: string[]
  sat: string[]
}
