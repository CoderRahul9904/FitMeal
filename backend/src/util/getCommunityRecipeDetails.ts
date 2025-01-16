import mongoose from "mongoose"
import { getUser } from "./getUserInfo"

const CommunityRecipe=require('../models/CommunityRecipe')

export const getCommunityRecipeDetails=async(recipeId:string)=>{
    const id = new mongoose.Types.ObjectId(recipeId)
    const CommunityR=await CommunityRecipe.findById(id)
    const userInfo=await getUser(CommunityR.userId)
    return { recipeDetails:CommunityR,userInfo}
}