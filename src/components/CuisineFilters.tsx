
import { useDispatch } from 'react-redux'
import { cuisines } from '../util/cuisine'
import { SetCuisine } from '../redux/slices/RecipesSlice'

function Cuisine() {

  const dispatch=useDispatch()
  const handleClick=(e:any)=>{
    const cuisine=e.target.value
    dispatch(SetCuisine({cuisine}))
  }
  return (
    <>
      <label className="block font-semibold">Cuisine</label>
      <select onChange={(e)=> handleClick(e)} name="cuisine" className="w-full md:w-[70%] lg:w-[90%] p-2 border rounded">
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

export default Cuisine