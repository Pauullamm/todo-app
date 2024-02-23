import React from "react";
function Addlistbutton(props) {
    return (
        <div className='new-list-button' onClick={props.onClick}>
        <p>New List</p>
        </div>
    );
}

export default Addlistbutton