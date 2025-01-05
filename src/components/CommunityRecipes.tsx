import { useEffect, useState } from "react"
import PaginationBar from "./PaginationBar"
import { useQuery } from "@apollo/client"
import { getCommunityRecipes } from "../graphql/queries"
import { Link } from "react-router-dom"


interface IRecipeCard {
  _id: string;
  name: string;
  image_url: string;
  cook_time: number;
  diet: string;
}


function CommunityRecipes() {
  const [currentPage,SetcurrentPage]=useState<number>(1)
  const {loading,error,data,refetch}=useQuery(getCommunityRecipes,{
    variables:{
      limit:3,
      offset:(currentPage - 1)*3
    }
  })
  useEffect(()=>{
    refetch()
  },[refetch])
  const handlePageChange=(page:number)=> {
    SetcurrentPage(page)
  }
  if (loading) return null;
  if (error) return `Error! ${error}`;
  const totalPage=Math.ceil(data.getCommunityRecipe.totalPage/3)

  return (
    <section className="py-12 px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">Community Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.getCommunityRecipe.CRecipe.map((recipe: IRecipeCard) => (
            <div key={recipe._id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img src={recipe.image_url} alt="Recipe" className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-xl mb-2">{recipe.name}</h3>
                <p className="text-gray-600 mb-2">Diet: {recipe.diet} | Time: {recipe.cook_time} min</p>
                <Link to={`/Community/Recipes/${recipe._id}`} className="mt-4 text-orange-500 border-2 border-orange-300 hover:text-white hover:bg-orange-400 px-4 py-2 rounded-md w-full text-center block">View Recipe</Link>
              </div>
            </div>
          ))}
        </div>
        <PaginationBar totalPages={totalPage} currentPage={currentPage} onPageChange={handlePageChange}/>
    </section>
  )
}

export default CommunityRecipes