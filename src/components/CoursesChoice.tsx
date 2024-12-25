
import { useDispatch } from 'react-redux'
import { courses } from '../util/course'
import { SetCommunityCourse } from '../redux/slices/CommunityRecipeSlice'

function CoursesChoise() {
  const dispatch=useDispatch()
  const handleCourse=(e:any)=>{
    const course=e.target.value
    dispatch(SetCommunityCourse({course}))
  }
  return (
    <>
        <label className="block font-semibold">Course</label>
            <select onChange={(e)=>handleCourse(e)} name="course"  className="w-full md:w-[70%] lg:w-[90%] p-2 border rounded">
                <option value="">Select Course</option>
                {courses.map((course,index)=>(
                    <option  key={index} value={course}>{course}</option>
                ))}
        </select>
    </>
  )
}

export default CoursesChoise