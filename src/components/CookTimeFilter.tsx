

import React from 'react'

function CookTimeFilter() {
  return (
    <>
    <label className="block font-semibold">Cook Time</label>
                <select name="cookTime" className="w-full md:w-[70%] lg:w-[90%] p-2 border rounded">
                    <option value="">Select Cook Time</option>
                    <option value="<15">Less than 15 mins</option>
                    <option value="15-30">15-30 mins</option>
                    <option value="30+">30+ mins</option>
                </select>
    </>
  )
}

export default CookTimeFilter