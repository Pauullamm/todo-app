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
    const [isVisible, setIsVisible] = useState(!props.closed);
    //props.closed === false by default -> this is state data from app.js
    const handleClose = () => {
        setIsVisible(!isVisible);
    }

// function to add new list items to todo-list
    var outputColor = ""
    if (props.category === "High") {
        outputColor = "#FF8080";
    }
    else if (props.category === "Medium") {
        outputColor = "#FFCF96";
    }
    else {
        outputColor = "#ADBC9F";
    };
//------------------------------------------------------



    return isVisible ? (
        <div className='todo-container' style={{backgroundColor : outputColor}}>
            <TodoClose key={props.closer_id} onClose={handleClose}/>
            <Todoname className="todo-title" name={props.title}/>
            <TodoDesc className="todo-description" desc={props.desc}/>
        </div>
    ) : null;
    };

export default Todolist