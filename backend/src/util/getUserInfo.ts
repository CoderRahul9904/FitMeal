import mongoose from "mongoose"
import User from "../models/User"


export const getUser=async(id:string)=>{
    const userId=new mongoose.Types.ObjectId(id)
    return await User.findById(userId)
}