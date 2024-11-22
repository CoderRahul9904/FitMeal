import React, { useState } from 'react'
import Cuisine from './CuisineFilters';
import Courses from './CoursesFilter';
import Diets from './DietsFilter';
import PrepTime from './PrepTimeFilter';
import CookTime from './CookTimeFilter';

function FilterRecipe() {

    const [searchTerm, setSearchTerm] = useState('');

    const [filter, setFilter] = useState({
        diet: '',
        course: '',
        cookTime: '',
    });

    const handleSearchChange = () => {
        // setSearchTerm(e.target!.value);
    }
    const handleFilterChange = () => {
        // const { name, value } = e.target;
        // setFilter((prev) => ({ ...prev, [name]: value }));
    };

    const applyFilter = () => {
        // Logic to apply filter with GraphQL query here
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
                <label className="block font-semibold">Ingredients</label>
                <input
                    type="text"
                    name="ingredients"
                    placeholder="e.g.Tomato, Basil"
                    onChange={handleFilterChange}
                    className="w-full md:w-[70%] lg:w-[90%] p-2 border rounded"
                />
            </div>

            <div className="mb-4">
                <PrepTime />
            </div>

            <div className="mb-4">
                <CookTime />
            </div>

            <button onClick={applyFilter} className=" border-2 mb-4 w-auto sm:w-[90%] text-orange-500 hover:bg-orange-500 hover:text-white border-orange-300  py-2 px-4 rounded">
                Apply Filter
            </button>
        </>
    )
}

export default FilterRecipe