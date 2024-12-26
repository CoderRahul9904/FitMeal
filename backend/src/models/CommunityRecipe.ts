import mongoose, { Schema } from "mongoose";
import { ICRecipe } from "../interface/communityRecipeInterface";


const UserDb:mongoose.Connection=require("../connectionDB/UserConnectionDB")

const CommunityRecipeSchema = new Schema({
    name: String,
    description: String,
    cuisine: { type: String, required: true },
    course: { type: String, required: true },
    diet: { type: String, required: true },
    cook_time:{type: Number,required:true},
    prep_time:{type: Number,required:true},
    serving:Number,
    ingredients_quantity: { type: [String], required: true },
    instructions: { type: [String], required: true },
    image_url: { type: String, required: true },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users', 
        required: true
    },
},
    { timestamps: true }
)

const CommunityRecipe = UserDb.model<ICRecipe>('CommunityRecipe', CommunityRecipeSchema,'CommunityRecipe');

module.exports = CommunityRecipe;