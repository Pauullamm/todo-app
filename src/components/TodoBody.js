import '../App.css';
import React , { useState } from "react"

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

function TodoClose() {
    //THIS NEEDS FIXING
    return (
        <div className='todo-close'>
            <svg height="20" viewBox="0 0 20 15" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z" fill="#393a37"></path></svg>
        </div>
    );
};

function Todolist(props) {

    const [showDivs, setShowDivs] = useState(true);

    const handleCloseButtonClick = () => {
        setShowDivs(false);
    };
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
    console.log(props.priority)

    return (
        <div className='todo-container' style={{backgroundColor : outputColor}}>
            {showDivs && (
                <>
                    <TodoClose onClick={handleCloseButtonClick}/>
                    <Todoname className="todo-title" name={props.title}/>
                    <TodoDesc className="todo-description" desc={props.desc}/>
                </>
            )}  
        </div>
    )
    }

export default Todolist