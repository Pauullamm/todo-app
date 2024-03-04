import './App.css';
import React, { useEffect, useState } from 'react'
import Todolist from './components/TodoBody.js';
import Addlistbutton from './components/NewTodoButton.js';
import FormComponent from './components/FormComponent.js';
import deletionContext from './DeletionContext.js';
// import Navbar from './components/Dashboard.js';


function Projectdashboard() {
  const [todos, settodos] = useState([]); // creates an array for todo components to be rendered 
  const [clickedtimes, setClickedtimes] = useState(0); // this is to ensure that each todo has a unique id, important esp for rendering lists
  const [formdisplay, setformdisplay] = useState(false); // state management for the input field ?necessary

  const deleteFunction = (deletingData) => {

    const remove_options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(deletingData)
    };
    fetch(`/memo-remove/${deletingData}`, remove_options)
    .then(response => {
      if (!response.ok) {
        console.log(response)
        throw new Error('Network response was not ok');
      }
      return response.json()
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }

  const get_options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  };
 // get JSON data on first render
  useEffect(() =>{
    fetch('/memo-retrieve', get_options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json()
    })
    .then(retrieved_data => {
      for (let i=0; i< retrieved_data.length; i++) {
        retrieved_data[i]["id"] = i;
      };
      settodos(retrieved_data); // sets the state of the todo lists to be what has been retrieved from the API
      // console.log('Data from the backend', retrieved_data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
    
  }, []); // empty dependencies because we want only want to get the data once when the page renders initially
  const handleForm = () => {
    setformdisplay(true);
  };

  const submitData = (data) => {
    //creates an object containing data from the FormComponent
    //this data will be rendered on each todolist
    console.log(data)

    const newTodoObj = {
      id: clickedtimes,
      title: data.title,
      description: data.description,
      category: data.category,
      closed: false,
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
      <deletionContext.Provider value={{delete_todo: deleteFunction}}>
        <div className='todo-handler'>
          {todos.map((info) => (
          <Todolist key={info.id} title={info.title} desc={info.description} category={info.category} closed={info.closed} closer_id={info.id}/>
        ))}
        </div>
      </deletionContext.Provider>
      
    </div>
  );
}


export default function App() {

  return (
    <div className="App">
      {/* <Navbar /> */}
      <div className='title-container'>
        <h1 className="title" >Another To-Do App</h1>
      </div>
        
      <div className='wrapper-container'>
        <Projectdashboard />
      </div>
    </div>
  );
}
