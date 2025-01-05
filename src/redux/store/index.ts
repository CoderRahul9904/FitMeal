import { configureStore } from "@reduxjs/toolkit";
import recipeFilterReducer from "../slices/RecipesSlice"
import communityRecipeReducer from "../slices/CommunityRecipeSlice"
import applyQueryFilterReducer from "../slices/ApplyQuerySlice"
const store=  configureStore({
    reducer:{
        recipeFilters:recipeFilterReducer,
        applyQuery: applyQueryFilterReducer,
        CommunityRecipe:communityRecipeReducer
    }
})

export default store