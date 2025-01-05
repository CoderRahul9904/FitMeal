
import FormField from './FormField'
import { useForm } from 'react-hook-form'
import { FormData } from '../interface/formtypes'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserLoginSchema } from '../interface/zodInterface'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
    const navigate=useNavigate()
    const { register,handleSubmit,setError,formState:{ errors}}=useForm<FormData>({resolver: zodResolver(UserLoginSchema)})
    const [userSideError,setUserSideError]=useState({
      error:false,
      message:"something"
    })
    const onSubmit= async(data: FormData)=>{
      try{
        const response=await axios.post("http://localhost:3000/fitmeal/login",data)
        console.log(response)
        setUserSideError({
          error:false,
          message:"Logined In successfully"
        })
        if(response.status && response.data.accessToken && response.data.refreshToken) {
          console.log(response.data)
          localStorage.setItem('accessToken',response.data.accessToken)
          localStorage.setItem('refreshToken',response.data.refreshToken)
          navigate("/Recipes")
        }
      }catch(err:any){
        if(err.status === 404){
          setUserSideError({
            error:true,
            message:"User not found, please sign in first!"
          })
        }else if(err.status === 401){
          setUserSideError({
            error: true,
            message:"Password is incorrect, please enter the correct password"
          })
        }else{
          setUserSideError({
            error: true,
            message:"Internal server error, please try again later!"
          })
        }
      }
        

    }
  return (
    <>
      {userSideError.error && <p className="w-full px-4 py-2 border text-red-500 rounded-md border-red-300">{userSideError.message}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              type="email"
              placeholder="Email"
              name="email"
              register={register}
              error={errors.email}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <FormField
              type="password"
              placeholder="Password"
              name="password"
              register={register}
              error={errors.password}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="submit"
              className="w-full py-2 text-white bg-green-600 rounded-md hover:bg-green-700"
            >
              Login
            </button>
          </form>
    </>
  )
}

export default LoginForm