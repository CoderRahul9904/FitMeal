
import { useDispatch } from 'react-redux'
import { diets } from '../util/diets'
import { SetCommunityDiet } from '../redux/slices/CommunityRecipeSlice'

function DietsChoice() {
  const dispatch=useDispatch()
  const handleDiet=(e:any)=>{
    const diet=e.target.value
    dispatch(SetCommunityDiet({diet}))
  }
  return (
    <>
      <label className="block font-semibold">Diet</label>
      <select onChange={(e)=>handleDiet(e)} name="diet"  className="w-full md:w-[70%] lg:w-[90%] p-2 border rounded">
        <option value="">Select Diet</option>
        {diets.map((diet,index)=>(
            <option key={index} value={diet}>{diet}</option>
        ))}
      </select>
    </>
  )
}

export default DietsChoice