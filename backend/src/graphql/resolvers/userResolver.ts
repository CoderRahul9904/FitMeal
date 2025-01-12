import { GraphQLError } from "graphql";
import { getUser } from "../../util/getUserInfo";
import { DateTimeResolver} from 'graphql-scalars'
import { ICRecipe } from "../../interface/communityRecipeInterface";
import { createCommunityRecipe } from "../../util/createCommunityRecipe";
import { getCommunityRecipes } from "../../util/getCommunityRecipes";
import { getRecipeDetails } from "../../util/getRecipeDetails";
import { getCommunityRecipeDetails } from "../../util/getCommunityRecipeDetails";

interface inputType{
    recipe:ICRecipe
}

interface limitOffset{
    limit:number,
    offset:number
}

const userResolver={
    DateTime: DateTimeResolver,
    Query:{
        userProfile:async(_root: any,__any:any,{decode}:any)=>{
            console.log("YAha hai context: ", decode)
            console.log("Bhai meko malum id nhi hai: ", decode?.id)
            if(!decode.id) throw new GraphQLError('User is not authorized please login again')
            return getUser(decode.id)
        },
        getCommunityRecipe:async(_root: any,{limit,offset}:limitOffset)=>{
            const { totalPage ,CRecipe}= await getCommunityRecipes(limit,offset)
            return { totalPage,CRecipe}
        },
        getCommunityRecipeDetails:async(_root:any,{recipeId}:{recipeId:string})=>{
            const { recipeDetails,userInfo}= await getCommunityRecipeDetails(recipeId)
            return {recipeDetails,userInfo}
        }
    },
    Mutation:{
        createRecipe:async(__:any,{recipe}:inputType,{decode}:any)=>{
            console.log("All set: ",decode.id)
            if(!decode.id) throw new GraphQLError('User is not authorized please login again')
            return  createCommunityRecipe(recipe,decode.id)
        }
    },
}


export default userResolver;