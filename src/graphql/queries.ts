import { gql} from "@apollo/client"


export const getCookTime=gql`
  query{
  getRecipes {
    cook_time
  }
}`