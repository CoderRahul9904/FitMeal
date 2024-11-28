import express from "express"
import { login, registration } from "../controller/authController"
const userRoute=express.Router()


userRoute
    .route("/sign-in")
    .post(registration)


userRoute
    .route("/login")
    .post(login)

export default userRoute