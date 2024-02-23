import React from "react";
import '../App.css';

function Addlistbutton(props) {
    return (
        <div className='new-list-button' onClick={props.onClick}>
        <p>New List</p>
        </div>
    );
}

export default Addlistbutton