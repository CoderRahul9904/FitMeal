import express from "express"
import cors from "cors"
const app=express()

app.use(express.json(),cors())


module.exports=app