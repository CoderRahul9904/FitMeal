

function FeatureRecipes() {
  return (
    <section className="py-12 px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">Featured Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((recipe) => (
            <div key={recipe} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={`https://via.placeholder.com/300?text=Recipe+${recipe}`} alt="Recipe" className="w-full h-auto object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-xl mb-2">Recipe Name</h3>
                <p className="text-gray-600">Calories: 200 | Time: 30 min</p>
              </div>
            </div>
          ))}
        </div>
    </section>
  )
}

export default FeatureRecipes