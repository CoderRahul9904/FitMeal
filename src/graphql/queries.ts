import { gql } from "@apollo/client"


export const getCookTime = gql`
  query{
  getRecipes {
    cook_time
  }
}`


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


