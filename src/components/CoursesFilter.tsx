

import { SetCourse } from '../redux/slices/RecipesSlice'
import { courses } from '../util/course'
import { useDispatch } from 'react-redux'




function Courses() {
  const dispatch=useDispatch()
  const handleClick=(e:any)=>{
    const course=e.target.value
    console.log(course)
    dispatch(SetCourse({course}))
  }
  
  return (
    <>
        <label className="block font-semibold">Course</label>
            <select onChange={(e)=>handleClick(e)} name="course"  className="w-full md:w-[70%] lg:w-[90%] p-2 border rounded">
                <option value="">Select Course</option>
                {courses.map((course,index)=>(
                    <option  key={index} value={course}>{course}</option>
                ))}
        </select>
    </>
  )
}

export default Courses