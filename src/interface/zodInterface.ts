import { z, ZodType} from "zod"
import { FormData } from "./formtypes"


export const UserSignUpSchema: ZodType<FormData>=z.object({
    email: z.string().email(),
    name: z.string().max(30,{message: "Please provide small name"}),
    password: z.string().min(8, {message: "Password is too short"}).max(20,{message: "Password is too long"}),
    confirmPassword: z.string()
}).refine((data)=> data.password === data.confirmPassword,{
    message:"Passwords do not match",
    path:["confirmPassword"]
})

export const UserLoginSchema: ZodType=z.object({
    email:z.string().email(),
    password: z.string().min(8, {message: "Password is too short"}).max(20,{message: "Password is too long"})
})