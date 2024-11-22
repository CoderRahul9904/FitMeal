

import { courses } from '../util/course'

function Courses() {
    // onChange={handleFilterChange}
  return (
    <>
        <label className="block font-semibold">Course</label>
            <select name="course"  className="w-full md:w-[70%] lg:w-[90%] p-2 border rounded">
                <option value="">Select Course</option>
                {courses.map((course,index)=>(
                    <option key={index} value={course.toLowerCase()}>{course}</option>
                ))}
        </select>
    </>
  )
}

export default Courses