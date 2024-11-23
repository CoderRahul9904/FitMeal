import { configureStore } from "@reduxjs/toolkit";
import recipeFilterReducer from "../slices/RecipesSlice"

const store=  configureStore({
    reducer:{
        recipeFilters:recipeFilterReducer
    }
})

export default store