// FormComponent.js
import React from "react";
import { useForm } from "react-hook-form";

const FormComponent = ({ onSubmit }) => {
const { register, handleSubmit, formState } = useForm();

return (
<form onSubmit={handleSubmit(onSubmit)}>
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
);
};

export default FormComponent;
