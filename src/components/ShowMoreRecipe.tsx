
import FeatureRecipes from './CommunityRecipes'

function ShowMoreRecipe() {
  return (
    <>
      <div className=' flex flex-col gap-1 justify-center '>
        <FeatureRecipes />
        <button className="text-orange-500 border-2 p-2 rounded-lg flex justify-center items-center w-16 font-semibold border-orange-300">Show More</button>
      </div>
    </>
  )
}

export default ShowMoreRecipe