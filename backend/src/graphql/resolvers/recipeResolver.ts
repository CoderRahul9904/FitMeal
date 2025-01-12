import { GraphQLError } from "graphql";
import { PaginationOptions } from "../../interface/paginationInterface";
import { getRecipes } from "../../util/getRecipes";
import { getRecipeDetails } from "../../util/getRecipeDetails";




const recipeResolver={
    Query:{
        recipeCard: async(_root: any,{limit,offset,filterQuery}:PaginationOptions,context:any)=>{
            const {limitedRecipes,totalPage}=await getRecipes(limit,offset,filterQuery)
            return {limitedRecipes,totalPage}
        },
        getRecipeDetails:(_root:any,{recipeId}:{recipeId:string})=>{
            if(!recipeId) throw new GraphQLError('Recipe Not Found')
            return  getRecipeDetails(recipeId)
        }, 
    },
}


export default recipeResolver;