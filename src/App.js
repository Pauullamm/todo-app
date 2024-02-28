import './App.css';
import React, { useState } from 'react'
import Todolist from './components/TodoBody.js';
import Addlistbutton from './components/NewTodoButton.js';
import Navbar from './components/Dashboard.js';
import FormComponent from './components/FormComponent.js';

function Projectdashboard(props) {
  const [todos, settodos] = useState([]);
  const [clickedtimes, setClickedtimes] = useState(0)


  const submitData = (data) => {
    const newTodoObj = {
      id: clickedtimes,
      "title": data.title,
      "Description": data.description,
      "dueDate": props.due,
      "priority": props.priority,
      active: true,
    };
      setClickedtimes(prevClickedtimes => prevClickedtimes + 1)
      settodos(prevTodos => [...prevTodos, newTodoObj]);
      console.log(todos)
  };


  // onClick={createNewTodo} 


  return (
    <div>
      <FormComponent onSubmit={submitData}/>

      <Addlistbutton />
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
      <Navbar />

      <div className='wrapper-container'>
        <Projectdashboard />
      </div>
      
    </div>
  );
}

export default App;
