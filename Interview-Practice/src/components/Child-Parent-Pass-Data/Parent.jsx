import React, { useState } from 'react'
import Child from './Child';

export default function Parent() {
  const [data,setData] = useState("");

  const handleDataFromChild = (receiveData) =>{
      setData(receiveData);
  }
  return (
    <div>
      <h2>Data Sending from child to parent </h2>
      <p>sending function as props</p>
      <p>Data from Child: {data}</p>
      <Child onSendData = {handleDataFromChild}/>
    </div>
  )
}
