import React from 'react'
import Parent from './parent'
import { createContext , useState} from 'react'

export const UserContext = createContext(0); // ✅ Exporting context

export default function GrandParent() {
   
   const [message, setMessage] = useState("Hello My name is Nikhat ")
  return (
    <UserContext.Provider value={{message, setMessage}}>

      <Parent />
      
    </UserContext.Provider>
  )
}
