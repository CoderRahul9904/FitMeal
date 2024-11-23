import { createSlice } from "@reduxjs/toolkit";

// export type DataQuery = {
//   cuisine?: string;
//   cook_time?: RangeInput;
//   diet?: string;
//   course?: string;
//   prep_time?: RangeInput;
//   name?: string;
//   ingredients_name?: string[]
// };


// type RangeInput ={
//   gte?: number;
//   lte?: number;
// }

const RecipesFilterSlice= createSlice({
    name: "recipeFilters",
    initialState:{
                cook_time: { gte: 0, lte:500 },
                course: null,
                cuisine:null,
                diet: null,
                prep_time: { gte: 0, lte: 500},
                ingredients_name: null,
                name: null,
            },
    reducers:{
        SetCookTime(state,action){
            state.cook_time={ gte:action.payload.cook_time.gte, lte:action.payload.cook_time.lte }
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
            state.prep_time=action.payload.prep_time
        },
        SetIngredientsName(state,action){
            state.ingredients_name=action.payload.ingredients_name
        },
        SetDiet(state,action){
            state.diet=action.payload.dietValue
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
