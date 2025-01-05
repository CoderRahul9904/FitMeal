import { useState } from "react"
import LeftRecipeBox from "../components/LeftRecipeBox"
import RightRecipeBox from "../components/RightRecipeBox"
import { useDispatch, useSelector } from "react-redux"
import { resetState } from "../redux/slices/CommunityRecipeSlice"
import { useMutation } from "@apollo/client"
import { updateRecipe } from "../graphql/mutation"


function Info() {
    const [createRecipes, SetcreateRecipe] = useState(false)
    const dispatch = useDispatch()
    const recipeUpdated = useSelector((state: any) => state.CommunityRecipe)
    const [createRecipe, { loading, error, data }] = useMutation(updateRecipe)
    const handleCreateRecipe = () => {
        console.log(recipeUpdated)
        createRecipe( {
            variables: {
                recipe: recipeUpdated,
            }
        })
        if (loading) return 'Submitting...';
        if (error) return `Submission error! ${error.message}`;
        SetcreateRecipe((prev) => !prev)
    }
    const handleOnClickCreateRecipe=()=>{
        SetcreateRecipe((prev) => !prev)
    }
    const handleCancelRecipe = () => {
        dispatch(resetState())
        SetcreateRecipe((prev) => !prev)
    }

    return (
        <div className="w-full h-full mx-auto p-4 mt-5">
            <div className="flex justify-end mr-10 items-center mb-4">
                <div>
                    {createRecipes ?
                        <button onClick={handleCancelRecipe} className="bg-green-400 hover:bg-green-300 sm:text-lg text-sm hover:text-gray-700 text-gray-800 px-4 py-2 rounded-md flex items-center">
                            Cancel
                        </button>
                        :
                        <button onClick={handleOnClickCreateRecipe} className="bg-green-400 hover:bg-green-300 sm:text-lg text-sm hover:text-gray-700 text-gray-800 px-4 py-2 rounded-md flex items-center">
                            Create new recipe
                        </button>
                    }
                </div>
            </div>

            {createRecipes && <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-4">RECIPE GENERAL INFORMATION</h2>
                <div className="flex sm:flex-row flex-col">
                    <div className="sm:w-1/2 w-full pr-4">
                        <LeftRecipeBox />
                    </div>
                    <div className="sm:w-1/2 w-full sm:pl-4">
                        <RightRecipeBox />
                    </div>
                </div>
                <button onClick={handleCreateRecipe} className="bg-green-400 hover:bg-green-300 hover:text-gray-700 text-gray-800 px-4 py-2 rounded-md mt-3 flex items-center">
                    Submit
                </button>
            </div>}
        </div>
    )
}

export default Info