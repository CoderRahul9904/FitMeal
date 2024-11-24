import { useQuery } from "@apollo/client"

import { getRecipeCard } from "../graphql/queries"
import { useEffect, useState } from "react";
import PaginationBar from "./PaginationBar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { filterInitialState } from "../redux/slices/RecipesSlice";

interface IRecipeCard {
  _id: string;
  name: string;
  image_url: string;
  cook_time: number;
  diet: string;
}

function RecipeCard() {

  const [currentPage, setCurrentPage] = useState<number>(1);
  const filters= useSelector((state:any)=>state.recipeFilters) || filterInitialState
  
  console.log("EveryThing Depends on this filter: ",filters)
  console.log(filters)
  const { loading, error, data, refetch } = useQuery(getRecipeCard, {
    variables: {
      limit: 9,
      offset: (currentPage - 1) * 9,
      filterQuery: filters
    }
  })
  useEffect(()=>{
    refetch()
  },[filters,refetch])
  if (loading) return null;
  if (error) return `Error! ${error}`;
  console.log("Data Fetched: ",data)
  const totalPages=Math.ceil(data.recipeCard.totalPage/9)
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log("Current Page:", page);
  };
  return (
    <section className="py-10 px-6">
      <h2 className="text-2xl font-semibold text-center mb-8">Featured Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {data.recipeCard.limitedRecipes.map((recipe: IRecipeCard) => (
          <div key={recipe._id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={recipe.image_url}
                alt={recipe.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-xl mb-2">{recipe.name}</h3>
              <p className="text-gray-600">Diet: {recipe.diet} | Time: {recipe.cook_time} min</p>
              {/* <button className="mt-4 text-orange-500 border-2 border-orange-300 hover:text-white hover:bg-orange-400 px-4 py-2 rounded-md w-full">View Recipe</button> */}
              <Link
                to={`/Recipes/${recipe._id}`}
                className="mt-4 text-orange-500 border-2 border-orange-300 hover:text-white hover:bg-orange-400 px-4 py-2 rounded-md w-full text-center block"
              >
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
      <PaginationBar
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </section>
  )
}

export default RecipeCard