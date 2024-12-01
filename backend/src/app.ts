const cors=require("cors")
import express from "express"
import userRoute from "./route/userRoute"

const app=express()

app.use(express.json())
app.use(cors({
  origin: 'http://localhost:4000', 
  credentials: true, 
}))


app.use("/fitmeal",userRoute)
app.use("/fitmeal/login",userRoute)

module.exports=app