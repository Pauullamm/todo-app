import '../App.css';
import React , { useState, useContext } from "react";
import TodoClose from './TodoClose';
import deletionContext from '../DeletionContext';

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


function Todolist({ closed, category, todo_display, closer_id, title, desc }) {
    const [isVisible, setIsVisible] = useState(!closed);
    const { delete_todo } = useContext(deletionContext);
    //props.closed === false by default -> this is state data from app.js
    const handleClose = () => {
        setIsVisible(!isVisible);
        console.log(delete_todo)
        delete_todo(closer_id)
    }

// function to add new list items to todo-list
    var outputColor = ""
    if (category === "High") {
        outputColor = "#FF8080";
    }
    else if (category === "Medium") {
        outputColor = "#FFCF96";
    }
    else {
        outputColor = "#ADBC9F";
    };
//------------------------------------------------------



    return isVisible ? (
        <div className='todo-container' style={{backgroundColor : outputColor}}>
            
            <TodoClose key={closer_id} onClose={handleClose}/>
            <Todoname className="todo-title" name={title}/>
            <TodoDesc className="todo-description" desc={desc}/>
        </div>
    ) : null;
    };

export default Todolist