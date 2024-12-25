
import { useDispatch } from 'react-redux'
import { cuisines } from '../util/cuisine'
import { SetCommunityCuisine } from '../redux/slices/CommunityRecipeSlice'

function CuisineChoice() {
  const dispatch=useDispatch()
  const handleCuisine=(e:any)=>{
    const cuisine=e.target.value
    dispatch(SetCommunityCuisine({cuisine}))
  }
  return (
    <>
      <label className="block font-semibold">Cuisine</label>
      <select onChange={(e)=>handleCuisine(e)} name="cuisine" className="w-full md:w-[70%] lg:w-[90%] p-2 border rounded">
        <option value="">Select Cuisine</option>
        {cuisines.map((cuisine,index) =>(
            <option key={index} value={cuisine}>
               {cuisine}
            </option>
        ))}
    </select>
    </>
  )
}

export default CuisineChoice