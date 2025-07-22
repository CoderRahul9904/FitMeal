import mongoose from "mongoose";

const db=process.env.DB!.replace('<db_password>',process.env.DB_PASS!)
if (!db) {
    throw new Error("Database connection string is not defined in environment variables.");
}

console.log("Database connection string:", db);

//Recipe Databse Connection
const FitMealDb:mongoose.Connection=mongoose.createConnection(db)  
FitMealDb.on('connected',()=>{
    console.log("Yes connected to FitMeal DB")
})

FitMealDb.on('error',()=>{
    console.log('Failed to connect FitMeal db')
})

module.exports=FitMealDb
