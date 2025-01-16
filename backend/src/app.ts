const cors=require("cors")
import express from "express"
import userRoute from "./route/userRoute"

const app=express()
// app.use(cors())
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true, 
}))


app.use("/fitmeal",userRoute)
app.use("/",userRoute)
app.use("/fitmeal/login",userRoute)

module.exports=app