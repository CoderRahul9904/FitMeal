import React, { useState } from 'react'
import Cuisine from './CuisineFilters';
import Courses from './CoursesFilter';
import Diets from './DietsFilter';
import PrepTime from './PrepTimeFilter';
import CookTime from './CookTimeFilter';
import IngredientFilter from './IngredientFilter';

function FilterRecipe() {

    const [cancel, setCancel] = useState(false);

    
    const handleCancel=()=>{
        setCancel(false)
    }
    
    const handleFilterChange = () => {
        // const { name, value } = e.target;
        // setFilter((prev) => ({ ...prev, [name]: value }));
    };

    const applyFilter = () => {
        // Logic to apply filter with GraphQL query here
        setCancel(true)
    };


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

            
            {!cancel ? 
                <button onClick={applyFilter} className=" border-2 mb-4 w-auto sm:w-[90%] text-orange-500 hover:bg-orange-500 hover:text-white border-orange-300  py-2 px-4 rounded">
                    Apply Filter
                </button> 
                :
                <button onClick={handleCancel} className=" border-2 mb-4 w-auto sm:w-[90%] bg-orange-500  text-white border-orange-300  py-2 px-4 rounded">
                    Cancel
                </button>
            }
        </>
    )
}

export default FilterRecipe