import { DataQuery } from "../interface/dataQueryInterface"
import { getTotalRecipeCount } from "./getTotalRecipesCount"

const Recipe=require("../models/Recipe")




export const getRecipes=async(limit:number,offset: number,dataQuery:DataQuery)=>{
    const query=Recipe.find(dataQuery)
    const pageQuery= Recipe.find(query.getQuery())
    const totalPage= getTotalRecipeCount(pageQuery)
    if(offset){
        query.skip(offset)
    }
    if(limit){
        query.limit(limit)
    }
    
    return  {limitedRecipes: await query, totalPage}
}