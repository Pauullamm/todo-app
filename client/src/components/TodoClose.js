import "../App.css";
import React from "react";
export default function TodoClose(props) {

    return (
        <div className='todo-close' onClick={props.onClose}>
            <svg height="20" viewBox="0 0 20 15" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z" fill="#393a37"></path></svg>
        </div>
    )

}
