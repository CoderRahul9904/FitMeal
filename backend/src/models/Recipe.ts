import mongoose, { Document, Schema } from 'mongoose';

interface IRecipe extends Document {
  name: string;
  description: string;
  cuisine: string;
  course: string;
  diet: string;
  ingredients_name: string;
  ingredients_quantity: string;
  prep_time: number;
  cook_time: number;
  instructions: string;
  image_url: string;
}

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

const Recipe = mongoose.model<IRecipe>('Recipes', RecipeSchema,'Recipes');
console.log("Am")
const info=Recipe.find()



export default Recipe;
