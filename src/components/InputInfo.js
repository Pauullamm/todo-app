import React, { useState } from "react";
import '../App.css'

function InputForm() {
    const [inputfield, setInputField] = useState({
        title: "",
        description: "",
        dueDate: "",
        priority: "",
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Here are the details you entered: ${inputfield.title}, ${inputfield.description}, ${inputfield.dueDate}, ${inputfield.priority}`)
    }
    return (
    // NEED TO FIX THIS PART
    <form onSubmit={handleSubmit}>
        <label>Name of To-Do
            <input type="text" value={inputfield.title} onChange={(e) => setInputField(e.target.value)}/>
            <input type="text" value={inputfield.description} onChange={(e) => setInputField(e.target.value)}/>
            <input type="text" value={inputfield.dueDate} onChange={(e) => setInputField(e.target.value)}/>
            <input type="text" value={inputfield.priority} onChange={(e) => setInputField(e.target.value)}/>
            <input type="submit" />
        </label>
    </form>
    )
}

export default function InputComponent() {
    
    return (
        <div className="input-wrapper">
            <div className="input-info-container">
                <InputForm />
            </div>
        </div>
        
    )
}