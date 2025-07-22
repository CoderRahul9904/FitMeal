
import { useDispatch } from 'react-redux'
import { SetPrepTime } from '../redux/slices/RecipesSlice'



function PreTime() {


  const dispatch=useDispatch()
  const handleClick=(e:any)=>{
    const prep_time=e.target.value
    if(prep_time === "<15"){
      dispatch(SetPrepTime({lte:15}))
    }else if(prep_time === "30+"){
      dispatch(SetPrepTime({gte:30}))
    }else{
      dispatch(SetPrepTime({gte:15,lte:30}))
    }
  }
  return (
    <>
      <label className="block font-semibold">Prep Time</label>
                <select onChange={(e)=>handleClick(e)}  name="prepTime" className="w-full md:w-[70%] lg:w-[90%] p-2 border rounded">
                    <option value="">Select Prep Time</option>
                    <option value="<15">Less than 15 mins</option>
                    <option value="15-30">15-30 mins</option>
                    <option value="30+">30+ mins</option>
                </select>
    </>
  )
}

export default PreTime