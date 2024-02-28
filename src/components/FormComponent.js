// FormComponent.js
import React from "react";
import { useForm } from "react-hook-form";

const FormComponent = (props) => {
    const { register, handleSubmit, formState } = useForm();


    const shownStyling = {
        display: "block"
    };

    const defaultStyling = {
        display: "none"
    }
    
    const output_reveal = props.reveal ? shownStyling : defaultStyling

    return (
    <div className="form-container" style={output_reveal}>
    <form onSubmit={handleSubmit(props.onSubmit)}>
        <div>
            <label>Title:</label>
            <input className="input-item" {...register("title")} />
        </div>
        <div>
            <label>Description:</label>
            <input className="input-item" {...register("description")} />
        </div>
        


        <div>
        <select {...register("category", { required: true })}>
            <option value="">Select Priority...</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
        </select>
        </div>





        <button type="submit" disabled={formState.isSubmitting}>
        Submit
        </button>
    </form>
    </div>

    );
};

export default FormComponent;
