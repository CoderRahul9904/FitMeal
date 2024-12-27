import mongoose from "mongoose";

const CommunityRecipe=require('../models/CommunityRecipe')
const Recipe=require("../models/Recipe")

export const getRecipeDetails = async (recipeId:string) => {
    const id = new mongoose.Types.ObjectId(recipeId);
    // const dbrec=await Recipe.findById(id)
    // const crec=await CommunityRecipe.findById(id)
    // console.log(dbrec)
    // console.log(crec)
    return (await Recipe.findById(recipeId)) || CommunityRecipe.findById(recipeId);
    // return  dbrec || crec
  };