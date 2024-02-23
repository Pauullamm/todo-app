import './App.css';
import React, { useState, useEffect } from 'react'
import Todolist from './components/TodoBody.js';
import Addlistbutton from './components/NewTodoButton.js';

function Projectdashboard() {
  const [todos, settodos] = useState([]);

  const createNewTodo = () => {
    const newTodoObj = {
      id: "",
      "title": "First Todo",
      "Description": "",
      "dueDate": "",
      "priority": ""
    };
    settodos(prevTodos => [...prevTodos, newTodoObj]);
    console.log(todos)
  };

  return (
    <>
      <Addlistbutton onClick={createNewTodo} />
      {todos.map((data) => (
        <Todolist key={data.id} title={data.title}/>
      ))}
    </>
  );
}


function App() {
  return (
    <div className="App">
      <div className='wrapper-container'>
        <Projectdashboard />
      </div>
      
    </div>
  );
}

export default App;
