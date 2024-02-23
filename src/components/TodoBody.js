import '../App.css';
import React from "react"

function Todoname(props) {
    return (
        <div className='todo-name'>
            <h1>{props.name}</h1>
        </div>
    )
}


function Todolist(props) {
// function to add new list items to todo-list

    return (
        <div className='todo-container'>
            <Todoname className="todo-title" name={props.title}/>  
        </div>
    )
    }

export default Todolist