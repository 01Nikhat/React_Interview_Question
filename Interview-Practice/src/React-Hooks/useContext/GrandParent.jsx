import React from 'react'
import Parent from './parent'
import { createContext } from 'react'

export default function GrandParent() {
   const userContext = createContext(0);
  return (
    <userContext.Provider>
      <Parent />
      
    </userContext.Provider>
  )
}
