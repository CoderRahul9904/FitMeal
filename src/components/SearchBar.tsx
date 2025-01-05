import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SetRecipeName } from '../redux/slices/RecipesSlice'
import { useNavigate } from 'react-router-dom'
function SearchBar() {
    const recipeName=useSelector((state:any)=> state.recipeFilters)
    console.log("Name in search Bar: ",recipeName)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const handleChange=(e: any)=>{
        const name=e.target.value
        dispatch(SetRecipeName({name}))
        
    }
    return (
        <>
            <input
                onChange={(e)=>handleChange(e)}
                type="text"
                value={recipeName.name}
                placeholder="Search recipes..."
                className="flex-grow p-3 rounded-l-lg border-t border-b border-l border-gray-300"
            />
            <button onClick={()=>navigate("/Recipes")} className="bg-green-500 text-white px-6 rounded-r-lg">Search</button>
        </>

    )
}

export default SearchBar