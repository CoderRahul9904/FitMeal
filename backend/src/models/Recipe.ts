import mongoose, { Document, Schema } from 'mongoose';
import { IRecipe } from '../interface/recipeInterface';

const FitMealdb:mongoose.Connection=require("../connectionDB/RecipeConnectionDB")


const RecipeSchema= new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    cuisine: { type: String, required: true },
    course: { type: String, required: true },
    diet: { type: String, required: true },
    ingredients_name: { type: String, required: true },
    ingredients_quantity: { type: String, required: true },
    prep_time: { type: Number, required: true }, // in minutes
    cook_time: { type: Number, required: true }, // in minutes
    instructions: { type: String, required: true },
    image_url: { type: String, required: true },
  },
  { timestamps: true }
);

const Recipe = FitMealdb.model<IRecipe>('Recipes', RecipeSchema);

const findRecipes=async()=>{
  const info=await Recipe.find()
  console.log(info)
}

findRecipes()

module.exports=Recipe;
