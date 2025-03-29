import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'



export default function TodoHome() {
  const [todos,setTodos] = useState([]);
//Add Todo Item
  const addTodo =(todo) =>{
      if (todo.trim() !== "") {
        setTodos([...todos,{text: todo,completed:false}]);
        //console.log(todos[0]);
        
      }
  }
//Remove Todo Item

const removeTodo =(index)=>{
    setTodos(todos.filter((v,i)=>i!==index));
}

//Toggle Todo item

const toggleTodo = (index)=>{
    const updatedTodos = todos.map((todo,i)=>i===index?{...todo,completed:!todo.completed}:todo);
    setTodos(updatedTodos);
}

//Updated Todos item

const updatedTodos =(index, newText) =>{
  const updatedTodos = todos.map((todo,i)=>i===index?{...todo,text:newText}:todo);
  setTodos(updatedTodos);
}
  return (
    <>
         <TodoInput addTodo={addTodo} />
         <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} updatedTodo={updatedTodos}  />
    </>
   
  )
}
