
import SearchBar from './SearchBar'

function SearchRecipeBox() {
  return (
    <section className="flex flex-col items-center justify-center text-center bg-green-100 py-12 px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-green-600 mb-4">Discover Your Next Healthy Meal!</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">Your Journey to Healthy Eating Starts Here</p>
        <div className="flex w-full max-w-md">
          <SearchBar />
        </div>
    </section>
  )
}

export default SearchRecipeBox