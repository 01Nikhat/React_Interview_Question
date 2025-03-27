import React from 'react'

export default function Child({onSendData}) {

  const handleClick = ( ) =>{
    onSendData("Hello I am calling from child component")
  }
  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={handleClick}>Send Data to Parent</button>
    </div>
  )
}
