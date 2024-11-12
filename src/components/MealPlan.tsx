

function MealPlan() {
  return (
    <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Meal Planner</h2>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-4">Plan Your Meals for the Day</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-100 rounded-lg">
                <h4 className="font-semibold mb-2">Breakfast</h4>
                <button className="text-green-500">+ Add meal</button>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <h4 className="font-semibold mb-2">Lunch</h4>
                <button className="text-green-500">+ Add meal</button>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <h4 className="font-semibold mb-2">Dinner</h4>
                <button className="text-green-500">+ Add meal</button>
              </div>
            </div>
          </div>
    </section>
  )
}

export default MealPlan