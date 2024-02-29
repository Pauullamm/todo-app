import '../App.css';
import React , { useState } from "react";
import TodoClose from './TodoClose';

function Todoname(props) {
    return (
        <div className='todo-name'>
            <h1>{props.name}</h1>
        </div>
    )
};

function TodoDesc(props) {
    return (
        <div className='todo-desc'>
            <p>{props.desc}</p>
        </div>
    )
};


function Todolist(props) {





// function to add new list items to todo-list
    var outputColor = ""
    if (props.priority === "High") {
        outputColor = "#FF8080";
    }
    else if (props.priority === "Medium") {
        outputColor = "#FFCF96";
    }
    else {
        outputColor = "#ADBC9F";
    };
//------------------------------------------------------



    return (
        <>
        <div className='todo-container' style={{backgroundColor : outputColor}}>
            <TodoClose />
            <Todoname className="todo-title" name={props.title}/>
            <TodoDesc className="todo-description" desc={props.desc}/>
        </div>
        </>
        
        
    )
    }

export default Todolist