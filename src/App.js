import './App.css';
import React, { useState, useEffect } from 'react'
import Todolist from './components/TodoBody.js';
import Addlistbutton from './components/NewTodoButton.js';
import FormComponent from './components/FormComponent.js';
// import Navbar from './components/Dashboard.js';

function Projectdashboard() {
  const [todos, settodos] = useState([]); // creates an array for todo components to be rendered 
  const [clickedtimes, setClickedtimes] = useState(0); // this is to ensure that each todo has a unique id, important esp for rendering lists
  const [formdisplay, setformdisplay] = useState(false); // state management for the input field ?necessary
  const [parentClickedStatus, setParentClickedStatus] = useState(false);
  // const [showDivs, setShowDivs] = useState(true);
  

  const submitData = (data) => {

    //creates an object containing data from the FormComponent
    //this data will be rendered on each todolist
    console.log(data)

    const newTodoObj = {
      id: clickedtimes,
      "title": data.title,
      "Description": data.description,
      "priority": data.category,
      closed: parentClickedStatus,
    };

      setClickedtimes(prevClickedtimes => prevClickedtimes + 1)
      settodos(prevTodos => [...prevTodos, newTodoObj]); //pushing a new todo object to the todos array
  };

  const revealForm = () => {
    setformdisplay(true);
  }
  
  return (
    <div>
      <Addlistbutton onClick={revealForm}/>

      <FormComponent onSubmit={submitData} reveal={formdisplay}/>

      <div className='todo-handler'>
        {todos.map((info) => (
        <Todolist key={info.id} title={info.title} desc={info.Description} priority={info.priority} closed={info.closed} closer_id={info.id}/>
      ))}
        </div>
    </div>
  );
}


export default function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}

      <div className='wrapper-container'>
        <Projectdashboard />
      </div>
      
    </div>
  );
}

// export default App;
