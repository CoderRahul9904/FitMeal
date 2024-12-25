import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SetCommunityInstruction } from "../redux/slices/CommunityRecipeSlice"


function InstructionBox() {
    const [instruction1,Setinstruction1]=useState('')
    const [actualInstruction,SetactualInstruction]=useState('')
    const { instructions } = useSelector((state: any) => state.CommunityRecipe)
    const length=instructions.length
    const dispatch=useDispatch()
    const handleInstruction=()=>{
        if(instructions.length!=0){
            dispatch(SetCommunityInstruction({instructions:actualInstruction}))
            SetactualInstruction('')
        }else{
            dispatch(SetCommunityInstruction({instructions:instruction1}))
        }
    }
    return (
        <>
            <div>
                <label className="block text-gray-700 mb-2">Steps</label>
                {instructions.length <= 0 ?
                 <div>
                    <div className="flex items-start mb-2">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">01</div>
                        <input onChange={(e)=>Setinstruction1(e.target.value)} type="text" placeholder="Add the diced tomatoes (with their juices) to the skillet. Add salt and pepper. Let the mixture simmer for 5-7 minutes until the tomatoes have softened and the sauce has slightly thickened." className="flex-1 px-4 py-2 border rounded-md" />
                    </div>
                 </div>
                    :
                    <ul>
                        {instructions.map((instruction: any, i: any) => (
                            <li key={i}>
                                <div className="flex items-start mb-2">
                                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">{i+1}</div>
                                    <input type="text" value={instruction} placeholder="Cook the pasta according to steps below." className="flex-1 px-4 py-2 border rounded-md" />
                                </div>
                            </li>
                        ))}
                            <div className="flex items-start mb-2">
                                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">{length+1}</div>
                                <input onChange={(e)=>SetactualInstruction(e.target.value)} value={actualInstruction} type="text" placeholder="Add the steps, once complete just submit it." className="flex-1 px-4 py-2 border rounded-md" />
                            </div>
                    </ul>
                }
                <button onClick={handleInstruction} className="text-orange-500 hover:bg-orange-500 hover:text-white border-2 p-2 rounded-lg flex justify-center w-full sm:w-auto items-center font-semibold border-orange-300">+ Add step</button>
            </div>
        </>
    )
}

export default InstructionBox