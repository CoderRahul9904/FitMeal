

function SavedRecipe() {
  return (
    <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Your Saved Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((recipe) => (
              <div key={recipe} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={`https://via.placeholder.com/300?text=Recipe+${recipe}`} alt="Recipe" className="w-full h-auto object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Recipe Name</h3>
                  <p className="text-gray-600">Calories: 400 kcal</p>
                  <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md w-full">View Recipe</button>
                </div>
              </div>
            ))}
          </div>
    </section>
  )
}

export default SavedRecipe