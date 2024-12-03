// RecipeListPage.js

import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';
import FilterRecipe from '../components/FilterRecipe';

const Recipes = () => {

  return (
    <>
      <Header />
      <div className="flex flex-col sm:flex-row p-6 ">
        {/* Left Section - Filter */}
        <div className="sm:w-1/4 p-4 sm:border-r w-screen">
          <div className=' flex flex-row sm:flex-col flex-wrap w-screen sm:fixed sm:w-1/4'>
            <FilterRecipe />
          </div>
        </div>


        {/* Right Section - Recipe Grid */}
        <div className="sm:w-3/4 w-screen pl-6">
          <div className="flex mb-2 w-full ">
            <SearchBar />
          </div>
          <RecipeCard />
        </div>
      </div>
      <div>
        <Footer />
      </div>

    </>

  );
};

export default Recipes;
