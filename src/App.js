import './App.css';
import React, { useState, useEffect } from 'react'
import Todolist from './components/TodoBody.js';
import Addlistbutton from './components/NewTodoButton.js';
import Navbar from './components/Dashboard.js';
import InputComponent from './components/InputInfo.js';

function Projectdashboard() {
  const [todos, settodos] = useState([]);
  const [clickedtimes, setClickedtimes] = useState(0)

  const createNewTodo = () => {
    setClickedtimes(prevClickedtimes => prevClickedtimes + 1)
    const newTodoObj = {
      id: clickedtimes,
      "title": "First Todo",
      "Description": "",
      "dueDate": "",
      "priority": "",
      active: true,
    };
    settodos(prevTodos => [...prevTodos, newTodoObj]);
    console.log(todos)
  };

  return (
    <div>
      <Addlistbutton onClick={createNewTodo} />
      <div className='todo-handler'>
        {todos.map((data) => (
          <Todolist key={data.id} title={data.title} />
        ))}
      </div>
      
      
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <InputComponent />
      <Navbar />
      <div className='wrapper-container'>
        <Projectdashboard />
      </div>
      
    </div>
  );
}

export default App;
