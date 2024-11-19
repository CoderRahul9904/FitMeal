
import mongoose, { Document, Schema } from 'mongoose';
export interface IRecipe extends Document {
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