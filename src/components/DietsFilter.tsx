
import { useDispatch } from 'react-redux'
import { diets } from '../util/diets'
import { SetDiet } from '../redux/slices/RecipesSlice'




function DietsFilter() {
  const dispatch=useDispatch()
  const handleClick=(e:any)=>{
    const diet=e.target.value
    dispatch(SetDiet({diet}))
  }



  return (
    <>
      <label className="block font-semibold">Diet</label>
      <select onChange={(e)=>handleClick(e)} name="diet"  className="w-full md:w-[70%] lg:w-[90%] p-2 border rounded">
        <option value="">Select Diet</option>
        {diets.map((diet,index)=>(
            <option key={index} value={diet}>{diet}</option>
        ))}
      </select>
    </>
  )
}

export default DietsFilter