import '../App.css';
import React from 'react';
function Addlistbutton(props) {
    return (
        <div className='new-list-button' onClick={props.onClick}>
        <p>New To-Do</p>
        </div>
    );
}

export default Addlistbutton