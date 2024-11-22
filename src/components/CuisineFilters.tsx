
import { cuisines } from '../util/cuisine'

function Cuisine() {
  return (
    <>
      <label className="block font-semibold">Cuisine</label>
      <select name="cuisine" className="w-full md:w-[70%] lg:w-[90%] p-2 border rounded">
        <option value="">Select Cuisine</option>
        {cuisines.map((cuisine,index) =>(
            <option key={index} value={cuisine.toLowerCase()}>
               {cuisine}
            </option>
        ))}
    </select>
    </>
  )
}

export default Cuisine