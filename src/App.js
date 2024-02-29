import './App.css';
import { useState } from 'react'
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

  };

  
  return (
    <div>
      <Addlistbutton onClick={handleForm}/>

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
      <h1 class="title" >Another To-Do App</h1>
      <div className='wrapper-container'>
        <Projectdashboard />
      </div>
      
    </div>
  );
}

// export default App;
