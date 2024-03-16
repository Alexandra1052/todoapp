import { useState } from "react";

import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo(item) {
    const myTodos = localStorage.getItem('todo');
    
    const [todos,setTodos] = myTodos ? useState(JSON.parse(myTodos)) : useState([]);

    const completedTodos = todos.filter((todo)=>todo.done).length;
    const totalTodos=todos.length;
    
  return (
    <div>
        <Form style="padding:1cm"  todos={todos} setTodos={setTodos}/>
         <TodoList  key={item.name} item={item} todos={todos} setTodos={setTodos}/>
         <Footer completedTodos={completedTodos} totalTodos={totalTodos}/>
   </div>
    
  );
}
