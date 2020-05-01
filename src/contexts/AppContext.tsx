import React, {createContext, useState} from 'react'

interface DataContext {
  user: UserSchema | undefined
  isLoged: boolean | undefined
  setIsLoged(value:boolean | undefined):void
}

const Context = createContext<DataContext>({} as DataContext)

export default Context
