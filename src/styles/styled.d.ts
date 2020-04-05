import 'styled-components/native'

declare module 'styled-components/native'{
  export interface DefaultTheme{
    title: string,
    bg:{
      primary: string
    },
    text:{
      color:{
        primary: string,
        secondary: string
      }
    },
    border:{
      radius:string,
      content: string
    }
  }
}