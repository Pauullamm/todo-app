import React, { useState } from "react";
import { useForm } from 'react-hook-form';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import '../App.css'

function InputForm() {
    const { register, handleSubmit } = useForm();
    const [inputfield, setInputField] = useState("")

    return (
    // NEED TO FIX THIS PART
    <div className="input-info-container">
        <form onSubmit={handleSubmit((data) => {
            console.log(data);
            console.log(register)
        })}>
            <div className="input-item input-group mb-3">
                <input {...register("Title")} placeholder="Title" />
            </div>
            
            <div className="input-item">
                <textarea style={{height: "100px"}} {...register("Description")} placeholder="Description" />
            </div>
            <p>{inputfield}</p>
            <div className="input-item">
                <select {...register("category", { required: true })}>
                    <option value="">Select Priority...</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>
            <div className="input-item">
                <input type="submit" />
            </div>
            
        </form>
    </div>
    )
}

export default function InputComponent() {
    
    return (
        <div className="input-wrapper">
            
                <InputForm />
            
        </div>
        
    )
}