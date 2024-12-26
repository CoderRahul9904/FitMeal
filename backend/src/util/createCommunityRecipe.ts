import { ICRecipe } from "../interface/communityRecipeInterface";
const CommunityRecipe=require('../models/CommunityRecipe')

export const createCommunityRecipe=async(recipe:ICRecipe,userId:any)=>{
    const newRecipe = new CommunityRecipe({ ...recipe, userId }); 
    console.log(newRecipe)
    await newRecipe.save();
    return newRecipe
}