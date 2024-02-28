import './App.css';
import React, { useState } from 'react'
import Todolist from './components/TodoBody.js';
import Addlistbutton from './components/NewTodoButton.js';
// import Navbar from './components/Dashboard.js';
import FormComponent from './components/FormComponent.js';

function Projectdashboard() {
  const [todos, settodos] = useState([]);
  const [clickedtimes, setClickedtimes] = useState(0);
  const [formdisplay, setformdisplay] = useState(false);
  

  const submitData = (data) => {
    //creates an object containing data from the FormComponent

    console.log(data)
    const newTodoObj = {
      id: clickedtimes,
      "title": data.title,
      "Description": data.description,
      "dueDate": data.due,
      "priority": data.category,
      active: true,
    };
      setClickedtimes(prevClickedtimes => prevClickedtimes + 1)
      settodos(prevTodos => [...prevTodos, newTodoObj]);
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
          <Todolist key={info.id} title={info.title} desc={info.Description} priority={info.priority}/>
        ))}
      </div>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}

      <div className='wrapper-container'>
        <Projectdashboard />
      </div>
      
    </div>
  );
}

export default App;
