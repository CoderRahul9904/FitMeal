// RecipeListPage.js
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import FeatureRecipes from '../components/FeatureRecipes';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RecipeListPage = () => {
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
      <Header />
      <div className="flex flex-col sm:flex-row p-6 ">
      <div className="sm:w-1/4 p-4 sm:border-r w-screen">
        <div className=' flex flex-row sm:flex-col flex-wrap w-screen sm:fixed sm:w-1/4'>
        <h2 className="text-xl font-bold mb-4">Filters</h2>
        
        <div className="mb-4">
          <label className="block font-semibold">Diet</label>
          <div>
            <input type="radio" name="diet" value="veg" onChange={handleFilterChange} /> Veg
            <input type="radio" name="diet" value="non-veg" onChange={handleFilterChange} className="ml-4" /> Non-Veg
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-semibold">Course</label>
          <select name="course" onChange={handleFilterChange} className="md:w-[90%] w-auto p-2 border rounded">
            <option value="">Select Course</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-semibold">Cuisine</label>
          <select name="cuisine" onChange={handleFilterChange} className="md:w-[90%] w-auto p-2 border rounded">
            <option value="">Select Cuisine</option>
            <option value="indian">Indian</option>
            <option value="italian">Italian</option>
            <option value="chinese">Chinese</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-semibold">Ingredients</label>
          <input
            type="text"
            name="ingredients"
            placeholder="e.g.Tomato, Basil"
            onChange={handleFilterChange}
            className="md:w-[90%] w-auto p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold">Prep Time</label>
          <select name="prepTime" onChange={handleFilterChange} className="md:w-[90%] w-auto p-2 border rounded">
            <option value="">Select Prep Time</option>
            <option value="<15">Less than 15 mins</option>
            <option value="15-30">15-30 mins</option>
            <option value="30+">30+ mins</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-semibold">Cook Time</label>
          <select name="cookTime" onChange={handleFilterChange} className="md:w-[90%] w-auto p-2 border rounded">
            <option  value="">Select Cook Time</option>
            <option value="<15">Less than 15 mins</option>
            <option value="15-30">15-30 mins</option>
            <option value="30+">30+ mins</option>
          </select>
        </div>

        <button onClick={applyFilter} className=" border-2 mb-4 w-auto sm:w-[90%] text-orange-500 hover:bg-orange-500 hover:text-white border-orange-300  py-2 px-4 rounded">
          Apply Filter
        </button>
      </div>
        </div>
        {/* <h2 className="text-xl font-bold mb-4">Filters</h2>
        
        <div className="mb-4">
          <label className="block font-semibold">Diet</label>
          <div>
            <input type="radio" name="diet" value="veg" onChange={handleFilterChange} /> Veg
            <input type="radio" name="diet" value="non-veg" onChange={handleFilterChange} className="ml-4" /> Non-Veg
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-semibold">Course</label>
          <select name="course" onChange={handleFilterChange} className="w-full p-2 border rounded">
            <option value="">Select Course</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-semibold">Cuisine</label>
          <select name="cuisine" onChange={handleFilterChange} className="w-full p-2 border rounded">
            <option value="">Select Cuisine</option>
            <option value="indian">Indian</option>
            <option value="italian">Italian</option>
            <option value="chinese">Chinese</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-semibold">Ingredients</label>
          <input
            type="text"
            name="ingredients"
            placeholder="e.g., Tomato, Basil"
            onChange={handleFilterChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold">Prep Time</label>
          <select name="prepTime" onChange={handleFilterChange} className="w-full p-2 border rounded">
            <option value="">Select Prep Time</option>
            <option value="<15">Less than 15 mins</option>
            <option value="15-30">15-30 mins</option>
            <option value="30+">30+ mins</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-semibold">Cook Time</label>
          <select name="cookTime" onChange={handleFilterChange} className="w-full p-2 border rounded">
            <option  value="">Select Cook Time</option>
            <option value="<15">Less than 15 mins</option>
            <option value="15-30">15-30 mins</option>
            <option value="30+">30+ mins</option>
          </select>
        </div>

        <button onClick={applyFilter} className="text-orange-500 border-2 hover:bg-orange-500 hover:text-white border-orange-300  py-2 px-4 rounded">
          Apply Filter
        </button>
      </div> */}

      {/* Right Section - Recipe Grid */}
       <div className="sm:w-3/4 w-screen pl-6">
        <div className="flex mb-4 w-full ">
          <SearchBar />
        </div>
          <FeatureRecipes />
          <FeatureRecipes />
          <FeatureRecipes />
      </div>
    </div>
    <div className=''>
      <Footer />
    </div>
    
    </>
    
  );
};

export default RecipeListPage;
