import React, { useState } from 'react'
import Cuisine from './CuisineFilters';
import Courses from './CoursesFilter';
import Diets from './DietsFilter';
import PrepTime from './PrepTimeFilter';
import CookTime from './CookTimeFilter';
import IngredientFilter from './IngredientFilter';
import { useDispatch, useSelector } from 'react-redux';
// import { SetApplyFilter } from '../redux/slices/ApplyQuerySlice';
import { resetState } from '../redux/slices/RecipesSlice';

function FilterRecipe() {
    const dispatch=useDispatch()
    // const { applyFilter}= useSelector((state:any)=> state.applyQuery)
    
    const handleCancel=()=>{
        dispatch(resetState())
    }
    

    // const handleApplyFilter = () => {
    //     dispatch(SetApplyFilter({}))
    // };


    return (
        <>
            <h2 className="text-xl font-bold mb-4">Filters</h2>
            <div className="mb-4">
                <Diets />
            </div>

            <div className="mb-4">
                <Courses />
            </div>

            <div className="mb-4">
                <Cuisine />
            </div>

            <div className="mb-4">
                <IngredientFilter />
            </div>

            <div className="mb-4">
                <PrepTime />
            </div>

            <div className="mb-4">
                <CookTime />
            </div>

            
            
                {/* <button onClick={handleApplyFilter} className=" border-2 mb-4 w-auto sm:w-[90%] text-orange-500 hover:bg-orange-500 hover:text-white border-orange-300  py-2 px-4 rounded">
                    Apply Filter
                </button>  */}
                
                <button onClick={handleCancel} className=" border-2 mb-4 w-auto sm:w-[90%] bg-orange-500  text-white border-orange-300  py-2 px-4 rounded">
                    Cancel
                </button>
            
        </>
    )
}

export default FilterRecipe