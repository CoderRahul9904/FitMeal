import { useState } from "react"
import Meal from "../assets/image.png"

function Info() {
    const[createRecipe,SetcreateRecipe]=useState(false)
    const handleCreateRecipe=()=>{
        SetcreateRecipe((prev)=> !prev)
    }

    return (
        <div className="w-full h-full mx-auto p-4 mt-5">
            <div className="flex justify-end mr-10 items-center mb-4">
                <div>
                    <button onClick={handleCreateRecipe} className="bg-green-400 hover:bg-green-300 hover:text-gray-700 text-gray-800 px-4 py-2 rounded-md flex items-center">
                        Create new recipe
                    </button>
                </div>
            </div>

            {createRecipe && <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-4">RECIPE GENERAL INFORMATION</h2>
                <div className="flex">
                    <div className="w-1/2 pr-4">
                        <div className="mb-4 flex gap-1">
                            <img src={`https://via.placeholder.com/300?text=click%20me%20to%20upload%20image&fontsize=20`} alt="A bowl of Tomato Basil Pasta" className="w-full h-60 object-cover rounded-md" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Recipe name</label>
                            <input type="text" value="Tomato Basil Pasta" className="w-full px-4 py-2 border rounded-md" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Number of serving</label>
                            <input type="text" value="1-2" className="w-full px-4 py-2 border rounded-md" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Cook duration</label>
                            <input type="text" value="30" className="w-full px-4 py-2 border rounded-md" />
                        </div>
                        
                    </div>
                    <div className="w-1/2 pl-4">
                        <h2 className="text-lg font-semibold mb-4">RECIPE DETAIL</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Ingredients</label>
                            <div className="flex items-center mb-2">
                                <input type="text" value="225" className="w-16 px-4 py-2 border rounded-md mr-2" />
                                <select className="w-24 px-4 py-2 border rounded-md mr-2">
                                    <option>gram</option>
                                </select>
                                <input type="text" value="spaghetti or pasta of your choice" className="flex-1 px-4 py-2 border rounded-md" />
                            </div>
                            <div className="flex items-center mb-2">
                                <input type="text" value="1" className="w-16 px-4 py-2 border rounded-md mr-2" />
                                <select className="w-24 px-4 py-2 border rounded-md mr-2">
                                    <option>can</option>
                                </select>
                                <input type="text" value="14.5" className="w-16 px-4 py-2 border rounded-md mr-2" />
                                <select className="w-24 px-4 py-2 border rounded-md mr-2">
                                    <option>oz</option>
                                </select>
                                <input type="text" value="diced tomato" className="flex-1 px-4 py-2 border rounded-md" />
                            </div>
                            <button className="text-orange-500 border-2 hover:bg-orange-500 hover:text-white p-2 rounded-lg flex justify-center items-center font-semibold w-full border-orange-300">+ Add ingredients</button>
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Steps</label>
                            <div className="flex items-start mb-2">
                                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">01</div>
                                <input type="text" value="Cook the pasta according to package instructions until al dente." className="flex-1 px-4 py-2 border rounded-md" />
                            </div>
                            <div className="flex items-start mb-2">
                                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">02</div>
                                <input type="text" value="Add the diced tomatoes (with their juices) to the skillet. Add salt and pepper. Let the mixture simmer for 5-7 minutes until the tomatoes have softened and the sauce has slightly thickened." className="flex-1 px-4 py-2 border rounded-md" />
                            </div>
                            <button className="text-orange-500 hover:bg-orange-500 ml-9 hover:text-white border-2 p-2 rounded-lg flex justify-center items-center font-semibold border-orange-300">+ Add step</button>
                        </div>
                    </div>
                </div>
                <button onClick={handleCreateRecipe} className="bg-green-400 hover:bg-green-300 hover:text-gray-700 text-gray-800 px-4 py-2 rounded-md flex items-center">
                    Submit
                </button>
            </div>}
        </div>
    )
}

export default Info