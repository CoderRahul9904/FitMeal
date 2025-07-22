import React from "react";
import { FormFieldProps } from "../interface/formTypes";

const FormField: React.FC<FormFieldProps>=({
    type,
    placeholder,
    name,
    register,
    error,
    className,
})=>(
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        {...register(name)}
      />
      {error && <span className="text-red-600">{error.message}</span>}
    </>
)

export default FormField;

