import { gql, useQuery } from "@apollo/client"
import { useNavigate } from "react-router-dom"


export const getCookTime = gql`
  query{
  getRecipes {
    cook_time
  }
}`


export const getUserInfo=gql`
  query userInfo{
    userProfile{
      name
      createdAt
    }
  }
`
export const userProfileInfo=()=>{
  const navigate=useNavigate()
  const {error,loading,data}=useQuery(getUserInfo)
  if(error) navigate("/login")
  return {error,loading,data}
}

export const getRecipeCard = gql`
  query RecipeCard($limit: Int,$offset: Int,$filterQuery:DataQuery){
    recipeCard(limit: $limit,offset:$offset,filterQuery: $filterQuery) {
      limitedRecipes {
        name
        _id
        cook_time
        diet
        image_url
      },
      totalPage
    }
  }
`

export const getCommunityRecipes=gql`
   query GetCommunityRecipe($limit:Int,$offset: Int){
      getCommunityRecipe(limit:$limit,offset:$offset) {
        CRecipe {
          name
          _id
          image_url
          cook_time
          diet
      },
      totalPage
    }
 }
`


export const getRecipeDetail=gql`
query GetRecipeDetails($recipeId:String){
  getRecipeDetails(recipeId:$recipeId){
    name
    ingredients_quantity
    cook_time
    course
    cuisine
    diet
    instructions
    prep_time
    image_url
    description
  }
}
`

export const getCommunityRecipeDetails=gql`
query GetCommunityRecipeDetails($recipeId:String){
  getCommunityRecipeDetails(recipeId:$recipeId) {
    recipeDetails {
      name
      cook_time
      course
      cuisine
      description
      diet
      image_url
      ingredients_quantity
      instructions
      name
      prep_time
    }
    userInfo {
      name
    }
  }
}
`