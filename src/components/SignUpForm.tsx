import FormField from "./FormField";
import { useForm } from "react-hook-form";
import { FormData } from "../interface/formTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSignUpSchema } from "../interface/zodInterface";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../util/api";

function SignUpForm() {
    const navigate=useNavigate()
    const { handleSubmit, register, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(UserSignUpSchema)})
    const [userExist,setUserExist]=useState({
        exist:false,
        message:"something"
    })
    const onSubmit = async (data: FormData) => {
        try{
            const response=await api.post("/api/fitmeal/sign-in",data)
            setUserExist({
                exist:true,
                message:"New User Logged in"
            })
            if(response.status){
                navigate("/login")
            }
        }catch(err:any){
            console.log(err.status)
            if(err.status === 409){
                setUserExist({
                    exist:true,
                    message:"User email Exists"
                })
            }else{
                setUserExist({
                    exist:true,
                    message:"Internal server error, please try again later!"
                })
            }
        }
    }
    return (
        <>
            {userExist.exist && <p className="w-full px-4 py-2 border text-red-500 rounded-md border-red-300">User email Exists</p>}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                    register={register}
                    error={errors.name}
                />
                <FormField
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                    register={register}
                    error={errors.email}
                />
                <FormField
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                    register={register}
                    error={errors.password}
                />
                <FormField
                    type="password"
                    placeholder="confirmPassword"
                    name="confirmPassword"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                    register={register}
                    error={errors.confirmPassword}
                />
                <button
                    type="submit"
                    className="w-full py-2 text-white bg-green-600 rounded-md hover:bg-green-700"
                >
                    Sign Up
                </button>
            </form>
        </>
    )
}

export default SignUpForm