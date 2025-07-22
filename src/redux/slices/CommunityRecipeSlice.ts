import { createSlice } from "@reduxjs/toolkit";
export interface CommunityRecipeState {
    cook_time: number | null;
    course: string | null;
    cuisine: string | null;
    serving: number | null;
    diet: string | null;
    prep_time: number | null;
    ingredients_quantity: string[]; // Explicitly define the type
    name: string | null;
    description: string | null;
    image_url: string | null;
    instructions: string[];
  }
const initialState: CommunityRecipeState = {
    cook_time: null,
    course: null,
    cuisine: null,
    serving: null,
    diet: null,
    prep_time: null,
    ingredients_quantity: [], // Matches the defined type
    name: null,
    description: null,
    image_url: null,
    instructions: []
  };

const CommunityRecipeSlice= createSlice({
    name:"CommunityRecipe",
    initialState,
    //     cook_time: null,
    //     course: null,
    //     cuisine:null,
    //     serving:null,
    //     diet: null,
    //     prep_time: null,
    //     ingredients_quantity: [],
    //     name: null,
    //     description:null,
    //     image_url:null,
    //     instructions:[]
    // },
    reducers:{
        SetCommunityCookTime(state,action){
            state.cook_time=action.payload.cook_time
        },
        SetCommunityDescription(state,action){
            state.description=action.payload.description
        },
        SetCommunityServing(state,action){
            state.serving=action.payload.serving
        },
        SetCommunityRecipeName(state,action){
            state.name=action.payload.name
        },
        SetCommunityCourse(state,action){
            state.course=action.payload.course
        },
        SetCommunityCuisine(state,action){
            state.cuisine=action.payload.cuisine
        },
        SetCommunityPrepTime(state,action){
            state.prep_time=action.payload.prep_time
        },
        SetCommunityDiet(state,action){
            state.diet=action.payload.diet
        },
        SetCommunityIngredientsQuantity(state,action){
            state.ingredients_quantity.push(action.payload.ingredients_quantity)
        },
        SetCommunityImageUrl(state,action){
            state.image_url=action.payload.image_url
        },
        SetCommunityInstruction(state,action){
            state.instructions.push(action.payload.instructions)
        },
        resetState(state) {
            Object.assign(state, CommunityRecipeSlice.getInitialState());
        }
    }
})


export const CommunityState = CommunityRecipeSlice.getInitialState();

export const  { SetCommunityCookTime,
                SetCommunityRecipeName,
                SetCommunityCourse,
                SetCommunityCuisine,
                SetCommunityPrepTime,
                SetCommunityDiet,
                SetCommunityIngredientsQuantity,
                SetCommunityImageUrl,
                SetCommunityInstruction,
                SetCommunityServing,
                SetCommunityDescription,
                resetState
              }=CommunityRecipeSlice.actions

export default CommunityRecipeSlice.reducer
