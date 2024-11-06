import React from 'react';

function HomePage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center bg-green-100 py-12 px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-green-600 mb-4">Discover Your Next Healthy Meal!</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">Your Journey to Healthy Eating Starts Here</p>
        <div className="flex w-full max-w-md">
          <input
            type="text"
            placeholder="Search recipes..."
            className="flex-grow p-3 rounded-l-lg border-t border-b border-l border-gray-300"
          />
          <button className="bg-green-500 text-white px-6 rounded-r-lg">Search</button>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">Featured Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((recipe) => (
            <div key={recipe} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={`https://via.placeholder.com/300?text=Recipe+${recipe}`} alt="Recipe" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-xl mb-2">Recipe Name</h3>
                <p className="text-gray-600">Calories: 200 | Time: 30 min</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-2xl font-semibold text-center mb-8">Explore by Categories</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['Low-Carb', 'Vegan', 'High-Protein', 'Quick Meals'].map((category) => (
            <button key={category} className="bg-green-500 text-white px-4 py-2 rounded-md">{category}</button>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">Why Choose Explorer Meal?</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {['Personalized Recommendations', 'Save Your Favorites', 'Get Nutritional Info'].map((benefit) => (
            <div key={benefit} className="flex-1 bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="font-semibold text-xl text-green-600">{benefit}</h3>
              <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-2xl font-semibold text-center mb-8">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {['Search Recipes', 'Save to Dashboard', 'Track Nutrition','Can add Your own recipe'].map((step, index) => (
            <div key={index} className="flex-1 text-center">
              <div className="bg-green-500 text-white rounded-full h-16 w-16 flex items-center justify-center mx-auto text-2xl mb-4">
                {index + 1}
              </div>
              <h3 className="font-semibold text-xl">{step}</h3>
              <p className="text-gray-600 mt-2">Brief description of the step.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-white shadow-md py-6 mt-16">
        <div className="max-w-screen-lg mx-auto px-6 flex justify-between items-center">
          <p className="text-gray-700">&copy; 2024 FitMeal. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="text-gray-700 hover:text-green-600"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-700 hover:text-green-600"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-700 hover:text-green-600"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-700 hover:text-green-600"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </footer> */}
    </div>
  );
}

export default HomePage;
