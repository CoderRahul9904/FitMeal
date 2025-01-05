import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { SetCommunityIngredientsQuantity } from "../redux/slices/CommunityRecipeSlice"

function IngredientBox() {
    const [quantity,Setquantiy]=useState('')
    const [unit,Setunit]=useState('')
    const [ingredientType,SetIngredientType]=useState('')
    const [amount,Setamount]=useState('')
    const [measure,Setmeasure]=useState('')
    const [smallIngredientType,SetsmallIngredientType]=useState('')
    // const [addIngredient,SetaddIngredient]=useState('')

    const { ingredients_quantity }= useSelector((state:any)=> state.CommunityRecipe)
    const dispatch=useDispatch()
    const handleAddIngredient=()=>{
        let ingredient
        if(ingredientType && smallIngredientType){
            ingredient=ingredientType+ " "+quantity+" " +unit  +", "+amount +" "+ measure +" "+ smallIngredientType
        }else if(ingredientType && !smallIngredientType){
            ingredient=ingredientType+ " "+quantity+" " +unit
        }else{
            ingredient=amount +" "+ measure +" "+ smallIngredientType
        }
        dispatch(SetCommunityIngredientsQuantity({ingredients_quantity:ingredient}))
        Setquantiy('')
        Setunit('')
        SetIngredientType('')
        Setamount('')
        Setmeasure('')
        SetsmallIngredientType('')
    }
    return (
        <>
            <h2 className="text-lg font-semibold mb-4">RECIPE DETAIL</h2>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Ingredients</label>
                <div className="flex items-center mb-2">
                    <input onChange={(e)=>Setquantiy(e.target.value)} value={quantity} type="text" placeholder="225" className="w-16 px-4 py-2 border rounded-md mr-2" />
                    <select onChange={(e)=>Setunit(e.target.value)} value={unit} className="w-auto px-4 py-2 border rounded-md mr-2">
                        <option value="">Select quantity</option>
                        <option value="gram">gram</option>
                        <option value="ml">ml</option>
                    </select>
                    <input onChange={(e)=>SetIngredientType(e.target.value)} value={ingredientType} type="text" placeholder="Salt" className=" w-full px-4 py-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-2">
                    <input onChange={(e)=>Setamount(e.target.value)} value={amount} type="number" placeholder="1" className="w-16 px-4 py-2 border rounded-md mr-2" />
                    <select onChange={(e) =>Setmeasure(e.target.value)} value={measure} className="w-auto px-4 py-2 border rounded-md mr-2">
                        <option value="">Select amount</option>
                        <option value="teaspoons">teaspoons</option>
                        <option value="pieces">pieces</option>
                        <option value="cups">cups</option>
                        <option value="tablespoons">tablespoons</option>
                    </select>
                    <input onChange={(e)=>SetsmallIngredientType(e.target.value)} value={smallIngredientType} type="text" placeholder="Termaric" className=" w-full px-4 py-2 border rounded-md" />
                </div>
                {ingredients_quantity.length <= 0 ?
                    <div className="flex items-start mb-2">
                       <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">01</div>
                       <input type="text" placeholder="Salt 225 gram, 1 Termaric" className="flex-1 px-4 py-2 border rounded-md" />
                    </div>
                    :
                    <ul>
                    {ingredients_quantity.map((ingredients:any,i:any)=>(
                    <li key={i}>
                        <div className="flex items-start mb-2">
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">{i+1}</div>
                            <input type="text" value={ingredients} className="flex-1 px-4 py-2 border rounded-md" />
                        </div>
                    </li>
                    ))}
                    </ul>
                }
                <button onClick={handleAddIngredient} className="text-orange-500 border-2 hover:bg-orange-500 hover:text-white p-2 rounded-lg flex justify-center items-center font-semibold w-full border-orange-300">+ Add ingredients</button>
            </div>
        </>
    )
}

export default IngredientBox