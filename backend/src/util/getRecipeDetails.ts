import mongoose from "mongoose";
import { getUser } from "./getUserInfo";


const Recipe=require("../models/Recipe")

export const getRecipeDetails = async (recipeId:string) => {
    const id = new mongoose.Types.ObjectId(recipeId);
    
    return (await Recipe.findById(id))
  };