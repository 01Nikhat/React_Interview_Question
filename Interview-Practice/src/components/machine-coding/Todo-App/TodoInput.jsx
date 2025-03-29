import React, { useState } from 'react';

export default function TodoInput({addTodo}) {
  const [todo,setTodo] = useState("");

  const handleSubmit =()=>{
    console.log(todo);
    
      if (todo.trim()) {
        addTodo(todo);
        setTodo("");
      }
      
  }
  return (
    <div >
      <input type="text" value={todo} onChange= {(e) =>setTodo(e.target.value)}/>
      <button  onClick={handleSubmit}>ADD</button>
    </div>
  )
}
