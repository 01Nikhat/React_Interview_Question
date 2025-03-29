import React, { useState } from 'react'

export default function TodoList({todos,removeTodo,toggleTodo,updatedTodo}) {
  const [editedIndex,setEditedIndex] = useState(null);
  const [updatedText,setUpdatedText] = useState("");

  const handleEdit =(index,text) =>{
      setEditedIndex(index);
      setUpdatedText(text);
  }

  const handleUpdatedText =(index)=>{
      updatedTodo(index,updatedText);
      setEditedIndex(null);
  }
  return (
    <ul>
      {todos.map((todo,index)=>
      <li key={index}>
        <input type="checkbox" checked={todo.completed} onChange={()=>toggleTodo(index)} />
        {editedIndex === index ? 
       ( <>
            <input type="text" value={updatedText} onChange={(e)=>setUpdatedText(e.target.value)} />
            <button onClick={()=>handleUpdatedText(index)}>Save</button>
        </>)
          
        :
       ( <>
           <span
           style={{
            textDecoration: todo.completed ? "line-through" : "none",
            flex: 1,
          }}
           >{todo.text}</span>
           <button onClick={()=>handleEdit(index,todo.text)}>Update</button>
           <button onClick={()=>removeTodo(index)}>X</button>
        </>)}
      </li>
      )}
    </ul>
  )
}
