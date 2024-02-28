// FormComponent.js
import React from "react";
import { useForm } from "react-hook-form";

const FormComponent = (props) => {
const { register, handleSubmit, formState } = useForm();

const defaultStyling = {
    display: "none"
}

const shownStyling = {
    display: "block"
}
console.log(props.reveal)

return (
<div className="form-container" style={props.reveal === true ? shownStyling : defaultStyling}>
<form onSubmit={handleSubmit(props.onSubmit)}>
    <label>Title:</label>
    <input {...register("title")} />

    <label>Description:</label>
    <input {...register("description")} />

    <div className="input-item">
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
