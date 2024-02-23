import './App.css';
import React, { useState, useEffect } from 'react'
import Todolist from './components/TodoBody.js';
import Addlistbutton from './components/NewTodoButton.js';

function Projectdashboard() {

  const a_todo = {
    "title": "First Todo",
    "Description": "",
    "dueDate": "",
    "priority": ""
  }

  const all_todos = []

  const [todos, settodos] = useState(all_todos);
  const [clickedstatus, setClickedStatus] = useState(false);

  const checkForEmpty = () => {
    if (todos.length === 0) {

      return;
    }
  };

  useEffect(() => {
    checkForEmpty();
  }, [todos]);

  const newList = () => {
    console.log("clicked");
    setClickedStatus((prevStatus) => !prevStatus);
    settodos(prevStatus => prevStatus.push(a_todo));
    console.log(todos)
  };

  return (
    <>
      <Addlistbutton onClick={newList} />
      <Todolist />
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
