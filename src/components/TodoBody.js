import '../App.css';
import React from "react"

function Todoname(props) {
    return (
        <div className='todo-name'>
            <h1>{props.name}</h1>
        </div>
    )
}

function TodoDesc(props) {
    return (
        <div>
            <p>{props.desc}</p>
        </div>
    )
}

function Todolist(props) {
// function to add new list items to todo-list

    return (
        <div className='todo-container'>
            <Todoname className="todo-title" name={props.title}/>
            <TodoDesc className="todo-description" desc={props.desc}/>  

        </div>
    )
    }

export default Todolist