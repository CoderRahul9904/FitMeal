
import { diets } from '../util/diets'

function DietsFilter() {
    // onChange={handleFilterChange}
  return (
    <>
      <label className="block font-semibold">Diet</label>
      <select name="diet"  className="w-full md:w-[70%] lg:w-[90%] p-2 border rounded">
        <option value="">Select Diet</option>
        {diets.map((diet,index)=>(
            <option key={index} value={diet.toLowerCase()}>{diet}</option>
        ))}
      </select>
    </>
  )
}

export default DietsFilter