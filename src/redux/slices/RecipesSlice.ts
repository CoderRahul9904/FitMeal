import { createSlice } from "@reduxjs/toolkit";


const RecipesFilterSlice= createSlice({
    name: "recipeFilters",
    initialState:{
                cook_time: { gte: 0, lte:1000 },
                course: null,
                cuisine:null,
                diet: null,
                prep_time: { gte: 0, lte: 1000},
                ingredients_name: null,
                name: null,
            },
    reducers:{
        SetCookTime(state,action){
            state.cook_time={ 
                gte:action.payload.gte ?? state.cook_time.gte , 
                lte:action.payload.lte ?? state.cook_time.lte 
            }
        },
        SetRecipeName(state,action){
            state.name=action.payload.name
        },
        SetCourse(state,action){
            state.course=action.payload.course
        },
        SetCuisine(state,action){
            state.cuisine=action.payload.cuisine
        },
        SetPrepTime(state,action){
            state.prep_time={ 
                gte:action.payload.gte ?? state.prep_time.gte, 
                lte:action.payload.lte ?? state.prep_time.lte
            }
        },
        SetIngredientsName(state,action){
            state.ingredients_name=action.payload.ingredients_name
        },
        SetDiet(state,action){
            state.diet=action.payload.diet
        },
        
    }
})


export const filterInitialState = RecipesFilterSlice.getInitialState();

export const  { SetCookTime,
                SetRecipeName,
                SetCourse,
                SetCuisine,
                SetPrepTime,
                SetIngredientsName,
                SetDiet
              }=RecipesFilterSlice.actions

export default RecipesFilterSlice.reducer
