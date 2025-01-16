import express from "express"
import { login, registration } from "../controller/authController"
import { refreshAccessToken } from "../controller/refreshTokenController"
const userRoute=express.Router()


userRoute
    .route("/sign-in")
    .post(registration)


userRoute
    .route("/login")
    .post(login)

userRoute
    .route("/refresh-token")
    .post(refreshAccessToken)
export default userRoute