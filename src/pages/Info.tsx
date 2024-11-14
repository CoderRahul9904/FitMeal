import { useState } from "react"


function Info() {
    const [createRecipe, SetcreateRecipe] = useState(false)
    const handleCreateRecipe = () => {
        SetcreateRecipe((prev) => !prev)
    }

    return (
        <div className="w-full h-full mx-auto p-4 mt-5">
            <div className="flex justify-end mr-10 items-center mb-4">
                <div>
                    <button onClick={handleCreateRecipe} className="bg-green-400 hover:bg-green-300 sm:text-lg text-sm hover:text-gray-700 text-gray-800 px-4 py-2 rounded-md flex items-center">
                        Create new recipe
                    </button>
                </div>
            </div>

            {createRecipe && <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-4">RECIPE GENERAL INFORMATION</h2>
                <div className="flex sm:flex-row flex-col">
                    <div className="sm:w-1/2 w-full pr-4">
                        <div className="mb-4 flex gap-1">
                            <img src={`https://via.placeholder.com/300?text=click%20me%20to%20upload%20image&fontsize=20`} alt="A bowl of Tomato Basil Pasta" className="w-full h-auto sm:h-96 object-cover rounded-md" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Recipe name</label>
                            <input type="text" placeholder="Tomato Basil Pasta" className="w-full px-4 py-2 border rounded-md" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Number of serving</label>
                            <input type="text" placeholder="1-2" className="w-full px-4 py-2 border rounded-md" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Cook duration</label>
                            <input type="text" placeholder="30" className="w-full px-4 py-2 border rounded-md" />
                        </div>
                    </div>
                    <div className="sm:w-1/2 w-full sm:pl-4">
                        <h2 className="text-lg font-semibold mb-4">RECIPE DETAIL</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Ingredients</label>
                            <div className="flex items-center mb-2">
                                <input type="text" placeholder="225" className="w-16 px-4 py-2 border rounded-md mr-2" />
                                <select className="w-auto px-4 py-2 border rounded-md mr-2">
                                    <option value="gram">gram</option>
                                    <option value="ml">ml</option>
                                </select>
                                <input type="text" placeholder="Salt" className=" w-full px-4 py-2 border rounded-md" />
                            </div>
                            <div className="flex items-center mb-2">
                                <input type="number" placeholder="1" className="w-16 px-4 py-2 border rounded-md mr-2" />
                                <select className="w-auto px-4 py-2 border rounded-md mr-2">
                                    <option value="teaspoons">teaspoons</option>
                                    <option value="pieces">pieces</option>
                                    <option value="cups">cups</option>
                                    <option value="tablespoons">tablespoons</option>
                                </select>
                                <input type="text" placeholder="Termaric" className=" w-full px-4 py-2 border rounded-md" />
                            </div>
                            <div className="flex items-start mb-2">
                                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">01</div>
                                <input type="text" placeholder="Salt 225 gram" className="flex-1 px-4 py-2 border rounded-md" />
                            </div>
                            <button className="text-orange-500 border-2 hover:bg-orange-500 hover:text-white p-2 rounded-lg flex justify-center items-center font-semibold w-full border-orange-300">+ Add ingredients</button>
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Steps</label>
                            <div className="flex items-start mb-2">
                                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">01</div>
                                <input type="text" placeholder="Cook the pasta according to steps below." className="flex-1 px-4 py-2 border rounded-md" />
                            </div>
                            <div className="flex items-start mb-2">
                                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">02</div>
                                <input type="text" placeholder="Add the diced tomatoes (with their juices) to the skillet. Add salt and pepper. Let the mixture simmer for 5-7 minutes until the tomatoes have softened and the sauce has slightly thickened." className="flex-1 px-4 py-2 border rounded-md" />
                            </div>
                            <button className="text-orange-500 hover:bg-orange-500 hover:text-white border-2 p-2 rounded-lg flex justify-center w-full sm:w-auto items-center font-semibold border-orange-300">+ Add step</button>
                        </div>
                    </div>
                </div>
                <button onClick={handleCreateRecipe} className="bg-green-400 hover:bg-green-300 hover:text-gray-700 text-gray-800 px-4 py-2 rounded-md mt-3 flex items-center">
                    Submit
                </button>
            </div>}
        </div>
    )
}

export default Info