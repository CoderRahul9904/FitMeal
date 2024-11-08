import React from 'react'

function Overview() {
  return (
    <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Your Daily Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Calories Consumed</h3>
              <p className="text-2xl font-bold text-green-500">1500 kcal</p>
              <p className="text-gray-600">Goal: 2000 kcal</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Protein Intake</h3>
              <p className="text-2xl font-bold text-green-500">75g</p>
              <p className="text-gray-600">Goal: 100g</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Water Intake</h3>
              <p className="text-2xl font-bold text-green-500">2L</p>
              <p className="text-gray-600">Goal: 3L</p>
            </div>
          </div>
        </section>
  )
}

export default Overview