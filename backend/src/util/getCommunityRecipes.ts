import { getTotalRecipeCount } from "./getTotalRecipesCount"

const CommunityRecipe=require('../models/CommunityRecipe')

export const getCommunityRecipes =async(limit:number,offset:number)=>{
    const queryData= CommunityRecipe.find()
    const pageQuery= CommunityRecipe.find(queryData.getQuery())
    const totalPage=await getTotalRecipeCount(pageQuery)
    if(offset){
        queryData.skip(offset)
    }
    if(limit){
        queryData.limit(limit)
    }
    return { totalPage, CRecipe:await queryData}
}