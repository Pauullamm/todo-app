import './App.css';
import React, { useState, useEffect, useMemo } from 'react'
import Todolist from './components/TodoBody.js';
import Addlistbutton from './components/NewTodoButton.js';
// import Navbar from './components/Dashboard.js';
import FormComponent from './components/FormComponent.js';

function Projectdashboard() {
  const [todos, settodos] = useState([]); // creates an array for todo components to be rendered 
  const [clickedtimes, setClickedtimes] = useState(0); // this is to ensure that each todo has a unique id, important esp for rendering lists
  const [formdisplay, setformdisplay] = useState(false); // state management for the input field ?necessary
  
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
      active: true,
    };

      setClickedtimes(prevClickedtimes => prevClickedtimes + 1)
      settodos(prevTodos => [...prevTodos, newTodoObj]); //pushing a new todo object to the todos array
  };

  const revealForm = () => {
    setformdisplay(true);
  }

  const listsToCheck = document.getElementsByClassName("todo-container");
  console.log(listsToCheck[0].childNodes[0].className)

  //NEED TO FIX THIS
  useEffect(() =>{
    try {
      if (listsToCheck[0].childNodes[0]["clickedstatus"] === "true") {
        console.log('clicked')
      }
      console.log(listsToCheck[0].childNodes[0]);
    } catch (error) {
      console.log("unknown error occurred")
    }
    
    
    
  }, [listsToCheck])
  
  return (
    <div>
      <Addlistbutton onClick={revealForm}/>

      <FormComponent onSubmit={submitData} reveal={formdisplay}/>

      <div className='todo-handler'>
        {todos.map((info) => (
        <Todolist key={info.id} title={info.title} desc={info.Description} priority={info.priority} closed={!info.active} />
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
