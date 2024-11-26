import mongoose from "mongoose"
import { DataQuery } from "../interface/dataQueryInterface"
import { getTotalRecipeCount } from "./getTotalRecipesCount"

const Recipe=require("../models/Recipe")




export const getRecipes=async(limit:number,offset: number,filterQuery:DataQuery)=>{
    const query: any={}
    console.log("filter query:",filterQuery)
    if(filterQuery?.name){
        query.name={ $regex: `${filterQuery.name}`, $options: 'i' };
        console.log("Name ka query",query)
    }
    if(filterQuery?.cuisine){
        query.cuisine=filterQuery.cuisine
    }

    if(filterQuery?.diet){
        query.diet=filterQuery.diet
    }

    if(filterQuery?.cook_time?.gte && filterQuery.cook_time.lte){
        query.cook_time={ $lte:filterQuery.cook_time!.lte, $gte:filterQuery.cook_time!.gte}
    }
    

    if(filterQuery?.prep_time?.gte && filterQuery.prep_time.lte){
        query.prep_time={ $lte:filterQuery.prep_time!.lte, $gte: filterQuery.prep_time!.gte}
    }
    // }else if(filterQuery?.prep_time?.lte){
    //     query.prep_time={ $lte:filterQuery.prep_time.lte}
    // }else{
    //     query.prep_time={ $lte:filterQuery.prep_time!.lte, $gte: filterQuery.prep_time!.gte}
    // }

    if(filterQuery?.course){
        query.course=filterQuery.course
    }

    if(filterQuery?.ingredients_name && !(filterQuery?.ingredients_name.length === 1 && filterQuery?.ingredients_name[0] === "")){
        query.ingredients_name={ $in: filterQuery.ingredients_name}
    }
    console.log("Overall Query: ",query)
    const queryData=Recipe.find(query)
    const pageQuery= Recipe.find(queryData.getQuery())
    const totalPage= getTotalRecipeCount(pageQuery)
    if(offset){
        queryData.skip(offset)
    }
    if(limit){
        queryData.limit(limit)
    }
    
    return  {limitedRecipes: await queryData, totalPage}
}