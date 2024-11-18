const mongoose=require('mongoose')
require('dotenv').config({ path: '../config.env' });
console.log(process.env.DB)
const db=process.env.DB!.replace('<db_password>',process.env.DB_PASS!)

console.log(db)
const FitMealDb=mongoose.createConnection(db)
FitMealDb.on('connected',()=>{
    console.log("Yes connected to FitMeal DB")
})

FitMealDb.on('error',()=>{
    console.log('Failed to connect db')
})

console.log("working")

module.exports=FitMealDb