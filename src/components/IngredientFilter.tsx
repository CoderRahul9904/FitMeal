
import { useDispatch } from 'react-redux'
import { SetIngredientsName } from '../redux/slices/RecipesSlice'

function IngredientFilter() {
    const dispatch=useDispatch()
    const handleFilterChange=(e:any)=>{
        const ingredient=e.target.value as string
        const ingredients_name=ingredient.split(/,| /)
        console.log(ingredients_name)
        dispatch(SetIngredientsName({ingredients_name}))
    }
  return (
    <>
      <label className="block font-semibold">Ingredients</label>
                <input
                    type="text"
                    name="ingredients"
                    placeholder="e.g.Tomato, Basil"
                    onChange={(e)=>handleFilterChange(e)}
                    className="w-full md:w-[70%] lg:w-[90%] p-2 border rounded"
                />
    </>
  )
}

export default IngredientFilter