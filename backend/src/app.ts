import express from "express"
import cors from "cors"
const app=express()

app.use(express.json(),cors())
console.log("will work later")

module.exports=app