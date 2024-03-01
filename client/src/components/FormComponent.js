// FormComponent.js
import React from "react";
import { useForm, Controller } from "react-hook-form";

const FormComponent = (props) => {
    const { control, handleSubmit } = useForm();

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
        
        <div className="input-container">
            <label>Title:</label>
            <Controller
            name="title"
            control={control}
            defaultValue=""
            render={({ field }) => <input className="input-item" {...field} />}
            />
            {/* <input className="input-item" {...register("title")} /> */}
        </div>
        <div className="description-container">
            <label>Description:</label>
            <Controller
            name="description"
            control={control}
            defaultValue=""
            render={({ field }) => <textarea className="input-item" {...field} />}
            />
            {/* <input className="input-item" {...register("description")} /> */}
        </div>
        


        <div>
        <Controller
            name="category"
            control={control}
            defaultValue=""
            render={({ field }) => (
            <div className="custom-select">
                <select {...field}>
                    <option value=""><p>Select Priority...</p></option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>
            
            )}
            />
        {/* <select {...register("category", { required: true })}>
            <option value="">Select Priority...</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
        </select> */}
        </div>





        <button type="submit">Submit</button>
    </form>
    </div>

    );
};

export default FormComponent;
