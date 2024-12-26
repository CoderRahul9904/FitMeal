import { gql } from "@apollo/client";


export const updateRecipe = gql`
    mutation CreateRecipe($recipe:CommunityRecipe){
        createRecipe(recipe: $recipe) {
            name
        }
    }
`