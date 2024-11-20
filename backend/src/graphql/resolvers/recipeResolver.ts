

const Recipe=require("../../models/Recipe")

const recipeResolver={
    Query:{
        getRecipes:async()=>{
            return await Recipe.find()
        }, 
        greeting:()=> "hello world",
        recipeCard: async()=>{
            return await Recipe.find()
        },
    },
    Recipe:{
        cook_time: (recipe:any) =>{
            return recipe.cook_time
        }
    }
}


export default recipeResolver;