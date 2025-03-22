import { useState } from "react";

const UseState = () =>{
  const [count,setCount] = useState(0);

  const handleCount = () =>{
    setCount(count + 1);
  }
  return(
    <div>
      <p>useState example</p>
      <h2>count : {count}</h2>
      <button onClick={handleCount}>Increment</button>
    </div>
  )
}
export default UseState;