import './App.css';
import React, { useEffect, useState } from 'react'
import Todolist from './components/TodoBody.js';
import Addlistbutton from './components/NewTodoButton.js';
import FormComponent from './components/FormComponent.js';
// import Navbar from './components/Dashboard.js';

function Projectdashboard() {
  const [todos, settodos] = useState([]); // creates an array for todo components to be rendered 
  const [clickedtimes, setClickedtimes] = useState(0); // this is to ensure that each todo has a unique id, important esp for rendering lists
  const [formdisplay, setformdisplay] = useState(false); // state management for the input field ?necessary
  // const [showDivs, setShowDivs] = useState(true);
  

  const handleForm = () => {
    setformdisplay(true);
  }

  const submitData = (data) => {

    //creates an object containing data from the FormComponent
    //this data will be rendered on each todolist
    console.log(data)

    const newTodoObj = {
      id: clickedtimes,
      "title": data.title,
      "Description": data.description,
      "priority": data.category,
      closed: false, // this should be closed by default
    };

    

    setClickedtimes(prevClickedtimes => prevClickedtimes + 1)
    settodos(prevTodos => [...prevTodos, newTodoObj]); //pushing a new todo object to the todos array

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch('/memo-store', options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    // .then(info => {
    //   console.log(info);
    // })
    .catch(error => {
      console.error('Fetch error:', error);
    });
  };
  
  return (
    <div className='project-dashboard'>
      <div className='widgets'>
        <Addlistbutton onClick={handleForm}/>
        <FormComponent onSubmit={submitData} reveal={formdisplay}/>
      </div>
      <div className='todo-handler'>
        {todos.map((info) => (
        <Todolist key={info.id} title={info.title} desc={info.Description} priority={info.priority} closed={info.closed} closer_id={info.id}/>
      ))}
      </div>
    </div>
  );
}


export default function App() {

  const get_options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  };

  useEffect(() =>{
    fetch('/memo-retrieve', get_options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json()
    })
    .then(data => {
      console.log('Data from the backend', data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
    
  }, []);


  return (
    <div className="App">
      {/* <Navbar /> */}
      <div className='title-container'>
        <h1 class="title" >Another To-Do App</h1>
      </div>
        
      <div className='wrapper-container'>
        <Projectdashboard />
      </div>
    </div>
  );
}
