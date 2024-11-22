


export const getTotalRecipeCount=async(query:any)=>{
    return await query.countDocuments()
}