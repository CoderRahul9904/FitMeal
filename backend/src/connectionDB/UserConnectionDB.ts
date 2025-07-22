import mongoose from "mongoose";
import path from 'path';
import dotenv from 'dotenv';        
dotenv.config({
  path: path.resolve(__dirname, "../../", ".env")
});
console.log(path.resolve(__dirname, '.env'));
const db_user=process.env.DB_USER!.replace('<db_password>',process.env.DB_PASS!)

const UserDb:mongoose.Connection=mongoose.createConnection(db_user)  
UserDb.on('connected',()=>{
    console.log("Yes connected to User DB")
})

UserDb.on('error',()=>{
    console.log('Failed to connect User db')
})

module.exports=UserDb