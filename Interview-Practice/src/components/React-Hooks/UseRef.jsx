import React, { useRef, useState } from 'react'

export default function UseRef() {
  const [message,setMessage] = useState(" ");
 
  const inputRef = useRef(0);

  const handleButton = () =>{
    inputRef.current.focus(); // Focuses the input element directly
    setMessage(inputRef.current.value); // ✅ Get the input value
    console.log(inputRef.current.value); // ✅ Logs the value
  }
  
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleButton}>Update</button>
      <p>{message}</p>
    </div>
  )
}
