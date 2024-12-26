


import mongoose, { Document, Schema } from 'mongoose';
export interface ICRecipe extends Document {
    name: string;
    description: string;
    cuisine: string;
    course: string;
    diet: string;
    ingredients_quantity: [string];
    prep_time: number;
    cook_time: number;
    serving: number;
    instructions: [string];
    image_url: string;
    userId: mongoose.Schema.Types.ObjectId;
}