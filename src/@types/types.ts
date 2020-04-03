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
  notes?: PeriodType[] | null
  org?: string | null
  model?: string | null
}
type PeriodType = {name: string; subjects: NoteSchema[]}
