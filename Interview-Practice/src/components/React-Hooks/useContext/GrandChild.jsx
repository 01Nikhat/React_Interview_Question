import React, { useContext ,useState } from 'react'
import { UserContext } from './GrandParent'

export default function GrandChild() {
  const {message, setMessage} = useContext(UserContext);
  const [inputval, setInputVal] = useState("");
  const [isUpdated, setUpdated] = useState(false);

  const handleButton = () =>{
    setMessage(inputval);
    setUpdated(true);
  }
  return (
    <div>
      <input type="text" value={inputval} onChange={(e)=>setInputVal(e.target.value)}  />
      <button onClick ={ handleButton}> Save Update Message</button>
      {isUpdated ? <span>{message}</span> : " "}
    </div>
  )
}
