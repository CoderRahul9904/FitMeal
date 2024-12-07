import { configureStore } from "@reduxjs/toolkit";
import recipeFilterReducer from "../slices/RecipesSlice"
import applyQueryFilterReducer from "../slices/ApplyQuerySlice"
const store=  configureStore({
    reducer:{
        recipeFilters:recipeFilterReducer,
        applyQuery: applyQueryFilterReducer
    }
})

export default store