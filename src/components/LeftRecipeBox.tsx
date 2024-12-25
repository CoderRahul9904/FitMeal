
import { useDispatch } from 'react-redux'
import CoursesChoise from './CoursesChoice'
import CuisineChoice from './CuisineChoice'
import DietsChoice from './DietsChoice'
import { SetCommunityCookTime, SetCommunityDescription, SetCommunityImageUrl, SetCommunityPrepTime, SetCommunityRecipeName, SetCommunityServing } from '../redux/slices/CommunityRecipeSlice'
import { useState } from 'react'
import axios from 'axios'

function LeftRecipeBox() {
    const dispatch = useDispatch()
    const [imageUrl, setImageUrl] = useState(
        "https://via.placeholder.com/300?text=click%20me%20to%20upload%20image&fontsize=20"
    );

    const handleImageChange = async(e: any) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file); // Temporary URL for preview
            setImageUrl(url);

        }else { return}
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'simple-upload'); // Make sure to set an upload preset in Cloudinary

        try {
            // Upload the image to Cloudinary
            const response = await axios.post(
                'https://api.cloudinary.com/v1_1/dwufgmcfo/image/upload',
                formData
            );
            const uploadedImageUrl = response.data.secure_url;
            console.log(uploadedImageUrl)
            dispatch(SetCommunityImageUrl({image_url:uploadedImageUrl}))
        }catch(error){
            console.log(error)
        }
    }
    return (
            <>
                <div className="mb-4 flex flex-col gap-1">
                    {/* Clickable image */}
                    <label htmlFor="imageInput">
                        <img
                            src={imageUrl}
                            alt="Click to upload"
                            className="w-full h-auto sm:h-96 object-cover rounded-md cursor-pointer"
                        />
                    </label>
                    {/* Hidden file input */}
                    <input
                        id="imageInput"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Recipe name</label>
                    <input required onChange={(e) => dispatch(SetCommunityRecipeName({ name: e.target.value }))} type="text" placeholder="Tomato Basil Pasta" className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Number of serving</label>
                    <input required onChange={(e) => dispatch(SetCommunityServing({ serving: +e.target.value }))} type="text" placeholder="1-8" className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Cook duration</label>
                    <div className="w-full px-4 py-2 border rounded-md flex gap-1" >
                        <input required onChange={(e) => dispatch(SetCommunityCookTime({ cook_time: +e.target.value }))} type="text" placeholder="cook time in mins" className=' text-center focus:outline-none' />
                        <input value="+" className=' text-center focus:outline-none ' />
                        <input required onChange={(e) => dispatch(SetCommunityPrepTime({ prep_time: +e.target.value }))} type="text" placeholder="preparation time in mins" className=' text-center focus:outline-none ' />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Description</label>
                    <input required onChange={(e) => dispatch(SetCommunityDescription({ description: e.target.value }))} type="text" placeholder="Pasta is a versatile Italian dish made from wheat flour dough, shaped into various forms, and often served with sauces." className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div className="mb-4 flex gap-1">
                    <div>
                        <CoursesChoise />
                    </div>
                    <div>
                        <CuisineChoice />
                    </div>
                    <div>
                        <DietsChoice />
                    </div>
                </div>
            </>
        )
    }

    export default LeftRecipeBox