import React, { useState } from 'react'

export default function CounterOperation() {
  const [count,setCount] = useState(0);

  const handleIncrement =() =>{
      
      setCount((prevCount) => prevCount + 1);
  }
  const handleDecrement =() =>{
      if (count <= 0) {
        return 0;
      }
      setCount((prevCount)=>prevCount -1 );
  }
  const handleReset = () =>{
    setCount(0);
  }
  return (
    <div>
      <h2>Counter Operation</h2>
      <h3>Count Value :{count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}> Decrement</button>
      <button onClick={handleReset}>Reset</button>
      
    </div>
  )
}
