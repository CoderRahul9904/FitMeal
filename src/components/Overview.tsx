// import React from 'react'

// function Overview() {
//   return (
//     <section className="mb-12">
//           <h2 className="text-2xl font-semibold mb-6">Your Daily Overview</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-white shadow-md p-6 rounded-lg">
//               <h3 className="font-semibold text-lg mb-2">Calories Consumed</h3>
//               <p className="text-2xl font-bold text-green-500">1500 kcal</p>
//               <p className="text-gray-600">Goal: 2000 kcal</p>
//             </div>
//             <div className="bg-white shadow-md p-6 rounded-lg">
//               <h3 className="font-semibold text-lg mb-2">Protein Intake</h3>
//               <p className="text-2xl font-bold text-green-500">75g</p>
//               <p className="text-gray-600">Goal: 100g</p>
//             </div>
//             <div className="bg-white shadow-md p-6 rounded-lg">
//               <h3 className="font-semibold text-lg mb-2">Water Intake</h3>
//               <p className="text-2xl font-bold text-green-500">2L</p>
//               <p className="text-gray-600">Goal: 3L</p>
//             </div>
//           </div>
//         </section>
//   )
// }

// export default Overview


import React, { useState } from 'react';

function Overview() {
  const [calories, setCalories] = useState({ current: 1500, goal: 2000 });
  const [protein, setProtein] = useState({ current: 75, goal: 100 });
  const [water, setWater] = useState({ current: 2, goal: 3 });
  const [editMode, setEditMode] = useState({ calories: false, protein: false, water: false });

  // Update functions
  const handleUpdateClick = (category:any) => {
    setEditMode((prev) => ({ ...prev, [category]: true }));
  };

  const handleSaveClick = (category:any) => {
    setEditMode((prev) => ({ ...prev, [category]: false }));
  };

  const handleInputChange = (category:any, type:any, value:any) => {
    const updateCategory:any = {
      calories: setCalories,
      protein: setProtein,
      water: setWater,
    };
    updateCategory[category]((prev:any) => ({ ...prev, [type]: value }));
  };

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Your Daily Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Calories Card */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Calories Consumed</h3>
          {editMode.calories ? (
            <>
              <input
                type="number"
                value={calories.current}
                onChange={(e) => handleInputChange('calories', 'current', e.target.value)}
                className="w-full px-4 py-2 border rounded-md mb-2"
              />
              <input
                type="number"
                value={calories.goal}
                onChange={(e) => handleInputChange('calories', 'goal', e.target.value)}
                className="w-full px-4 py-2 border rounded-md mb-4"
              />
              <button
                onClick={() => handleSaveClick('calories')}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg w-full font-semibold"
              >
                Save
              </button>
            </>
          ) : (
            <>
              <p className="text-2xl font-bold text-green-500">{calories.current} kcal</p>
              <p className="text-gray-600 mb-4">Goal: {calories.goal} kcal</p>
              <button
                onClick={() => handleUpdateClick('calories')}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg w-full font-semibold"
              >
                Update Calories
              </button>
            </>
          )}
        </div>

        {/* Protein Card */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Protein Intake</h3>
          {editMode.protein ? (
            <>
              <input
                type="number"
                value={protein.current}
                onChange={(e) => handleInputChange('protein', 'current', e.target.value)}
                className="w-full px-4 py-2 border rounded-md mb-2"
              />
              <input
                type="number"
                value={protein.goal}
                onChange={(e) => handleInputChange('protein', 'goal', e.target.value)}
                className="w-full px-4 py-2 border rounded-md mb-4"
              />
              <button
                onClick={() => handleSaveClick('protein')}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg w-full font-semibold"
              >
                Save
              </button>
            </>
          ) : (
            <>
              <p className="text-2xl font-bold text-green-500">{protein.current}g</p>
              <p className="text-gray-600 mb-4">Goal: {protein.goal}g</p>
              <button
                onClick={() => handleUpdateClick('protein')}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg w-full font-semibold"
              >
                Update Protein
              </button>
            </>
          )}
        </div>

        {/* Water Card */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Water Intake</h3>
          {editMode.water ? (
            <>
              <input
                type="number"
                value={water.current}
                onChange={(e) => handleInputChange('water', 'current', e.target.value)}
                className="w-full px-4 py-2 border rounded-md mb-2"
              />
              <input
                type="number"
                value={water.goal}
                onChange={(e) => handleInputChange('water', 'goal', e.target.value)}
                className="w-full px-4 py-2 border rounded-md mb-4"
              />
              <button
                onClick={() => handleSaveClick('water')}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg w-full font-semibold"
              >
                Save
              </button>
            </>
          ) : (
            <>
              <p className="text-2xl font-bold text-green-500">{water.current}L</p>
              <p className="text-gray-600 mb-4">Goal: {water.goal}L</p>
              <button
                onClick={() => handleUpdateClick('water')}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg w-full font-semibold"
              >
                Update Water
              </button>
            </>
          )}
        </div>

      </div>
    </section>
  );
}

export default Overview;
