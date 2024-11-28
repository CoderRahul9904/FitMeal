import { FieldError,UseFormRegister } from "react-hook-form";


export type FormData={
    name: string;
    email: string;
    password:string;
    confirmPassword: string;
}


export type FormFieldProps={
    name: ValidFieldNames;
    type: string;
    placeholder:string;
    register: UseFormRegister<FormData>;
    error: FieldError | undefined;
    className:string;
}

export type ValidFieldNames =
  | "email"
  | "name"
  | "password"
  | "confirmPassword";
