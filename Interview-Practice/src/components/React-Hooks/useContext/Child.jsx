import React, { useContext } from 'react'
import { UserContext } from './GrandParent'
import GrandChild from './grandChild';

export default function Child() {
  const {message} = useContext(UserContext);
  return (
   <>
    <div>
      <p>{message}</p>
    </div>
    <GrandChild />
    </> 
  )
}
