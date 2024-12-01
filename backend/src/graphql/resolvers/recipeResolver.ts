import { PaginationOptions } from "../../interface/paginationInterface";
import { getRecipes } from "../../util/getRecipes";




const recipeResolver={
    Query:{
        // getRecipes:async()=>{
        //     return await Recipe.find()
        // }, 
        greeting:()=> "hello world",
        recipeCard: async(_root: any,{limit,offset,filterQuery}:PaginationOptions,context:any)=>{
            console.log("user: ",context)
            const {limitedRecipes,totalPage}=await getRecipes(limit,offset,filterQuery)
            return {limitedRecipes,totalPage}
        } 
    },
}


export default recipeResolver;