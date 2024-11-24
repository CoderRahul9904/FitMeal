import { useDispatch, useSelector } from "react-redux"
import { SetCookTime } from "../redux/slices/RecipesSlice"


function CookTimeFilter() {
  const { cook_time }=useSelector((state:any)=>state.recipeFilters)
  console.log("Console kar diya hai",cook_time)
  const dispatch=useDispatch()
  const handleClick=(e:any)=>{
    const prep_time=e.target.value
    if(prep_time === "<15"){
      dispatch(SetCookTime({lte:15}))
    }else if(prep_time === "30+"){
      dispatch(SetCookTime({gte:30}))
    }else{
      dispatch(SetCookTime({gte:15, lte:30}))
    }
  }
  return (
    <>
    <label className="block font-semibold">Cook Time</label>
                <select onChange={(e)=> handleClick(e)} name="cookTime" className="w-full md:w-[70%] lg:w-[90%] p-2 border rounded">
                    <option value="">Select Cook Time</option>
                    <option value="<15">Less than 15 mins</option>
                    <option value="15-30">15-30 mins</option>
                    <option value="30+">30+ mins</option>
                </select>
    </>
  )
}

export default CookTimeFilter