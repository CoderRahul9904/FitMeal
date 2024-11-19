import mongoose from "mongoose";
require('dotenv').config({ path: '../config.env' });

const db_user=process.env.DB_USER!.replace('<db_password>',process.env.DB_PASS!)

const UserDb:mongoose.Connection=mongoose.createConnection(db_user)  
UserDb.on('connected',()=>{
    console.log("Yes connected to User DB")
})

UserDb.on('error',()=>{
    console.log('Failed to connect User db')
})

module.exports=UserDb