import mongoose from "mongoose";
require('dotenv').config({ path: '../config.env' });

const db=process.env.DB!.replace('<db_password>',process.env.DB_PASS!)

//Recipe Databse Connection
const FitMealDb:mongoose.Connection=mongoose.createConnection(db)  
FitMealDb.on('connected',()=>{
    console.log("Yes connected to FitMeal DB")
})

FitMealDb.on('error',()=>{
    console.log('Failed to connect FitMeal db')
})

module.exports=FitMealDb
