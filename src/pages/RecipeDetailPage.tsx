import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { getRecipeDetail } from "../graphql/queries";
import { getInValidForm } from "../util/getInValidForm";


const RecipeDetailPage = () => {
  const [videoId,SetVideoId] =useState(' ')
  const { RecipeId } = useParams();
  console.log("Id was: ", RecipeId)
  const { loading, error, data } = useQuery(getRecipeDetail, {
    variables: {
      recipeId: RecipeId
    }
  })
  let instruction;
  let ingredients_quantity
  if(data){
    instruction=getInValidForm(data.getRecipeDetails.instructions)
    console.log(instruction)
    ingredients_quantity=getInValidForm(data.getRecipeDetails.ingredients_quantity)
    console.log(ingredients_quantity)
  }
  
  const handleSearch = async () => {
    if (data?.getRecipeDetails?.name) {
      try{
        console.log(data.getRecipeDetails.name)
        const searchQuery = encodeURIComponent(data.getRecipeDetails.name);
        const searchVideoQuery= await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&type=video&key=${import.meta.env.VITE_YOUTUBE_KEY}`
        );
        console.log(searchVideoQuery)
        const videoId = searchVideoQuery?.data?.items[0]?.id?.videoId;
        SetVideoId(videoId)
      }catch(error){
        console.log(error)
      }
    }
  };
  
  useEffect(()=>{
    if(data) handleSearch()
  },[data])
  
  console.log("Bhai yaha hai video Id:- ",videoId)
  console.log(data)
  
  if (loading) return <p>loading.....</p>
  if(error) return <p>error</p>


  // const recipes = {
  //   name: "Mexican Style Red Chicken Chilaquiles Recipe",
  //   description: "Mexican Style Red Chilaquiles Recipe is a tortilla casserole, which contains a tangy tomato sauce mixed with shredded chicken and toasted tortillas chips...",
  //   cuisine: "Mexican",
  //   course: "Appetizer",
  //   diet: "Non Vegetarian",
  //   ingredients_name: "Tortillas, Cheese, Chicken breasts, Dried Thyme Leaves, Onion, Garlic, Tomatoes...",
  //   ingredients_quantity: "2 Tortillas, 2 tablespoons Cheese, 150 grams Chicken breasts...",
  //   prep_time: 10,
  //   cook_time: 25,
  //   instructions: "To begin making the Mexican Style Red Chilaquiles Recipe, preheat the oven to 180 degrees Celsius...",
  //   image_url: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl_sunitha/Mexican_Style_Red_Chilaquiles_Recipe.jpg"
  // };

  // const recipe = {
  //   name: "Mexican Style Red Chicken Chilaquiles Recipe",
  //   description: "Mexican Style Red Chilaquiles Recipe is a tortilla casserole, which contains a tangy tomato sauce mixed with shredded chicken and toasted tortillas chips. Traditionally in Mexico they can make it in a simplest form by just making tomato salsa and tossing it with toasted tortillas. The dish can also be made with egg or just plain with tomato salsa without any addition of chicken.",
  //   cuisine: "Chinese",
  //   course: "World Breakfast",
  //   diet: "Non Vegetarian",
  //   cook_time: 234,
  //   prep_time: 324,
  //   serving: 3,
  //   ingredients_quantity: ["Chicken", "Noodles", "Soy Sauce", "Vegetables"], // Example ingredients
  //   instructions: [
  //     "Boil the noodles until soft.",
  //     "Stir-fry the chicken and vegetables.",
  //     "Add soy sauce and mix well.",
  //     "Serve hot."
  //   ], // Example instructions
  //   image_url: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl_sunitha/Mexican_Style_Red_Chilaquiles_Recipe.jpg",
  // };

  return (
    <div>
      <Header />
      {/* <div className="text-center my-6">
        <p className="text-lg text-stone-700 font-semibold">
          A Recipe by <strong className="text-orange-500 text-xl">Rahul Mourya</strong>, one of the community members.
        </p>
      </div> */}
      <div className="flex flex-wrap justify-center gap-8 px-6 my-3">
        {/* Recipe Video */}
        <div className="w-full md:w-[45%]">
          <h2 className="text-2xl font-semibold mb-3 text-green-500">Watch Recipe Video</h2>
          <iframe
            width="100%"
            height="325"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Recipe Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg bg-stone-300"
          ></iframe>
        </div>

        {/* Recipe Image */}
        <div className="w-full md:w-[45%]">
          <h2 className="text-2xl font-semibold mb-3 text-green-500">{data.getRecipeDetails.name}</h2>
          <img
            src={data.getRecipeDetails.image_url}
            alt={data.getRecipeDetails.name}
            className="rounded-lg shadow-md object-cover w-full h-80"
          />
        </div>
      </div>

      {/* Recipe Info */}
      <div className="my-10 px-6 flex flex-wrap justify-center gap-8">
        {/* Description and Details */}
        <div className="w-full md:w-[45%]">
          <h2 className="text-xl font-semibold text-stone-700 mb-3">Description</h2>
          <p className="text-gray-600 leading-6">{data.getRecipeDetails.description}</p>

          <h2 className="text-xl font-semibold text-green-500 mt-6">Details</h2>
          <ul className="mt-3 text-gray-600 space-y-2">
            <li><strong>Cuisine:</strong> {data.getRecipeDetails.cuisine}</li>
            <li><strong>Course:</strong> {data.getRecipeDetails.course}</li>
            <li><strong>Diet:</strong> {data.getRecipeDetails.diet}</li>
            <li><strong>Cook Time:</strong> {data.getRecipeDetails.cook_time} minutes</li>
            <li><strong>Prep Time:</strong> {data.getRecipeDetails.prep_time} minutes</li>
            {/* <li><strong>Serving:</strong> {recipe.serving} people</li> */}
          </ul>
        </div>

        {/* Ingredients and Instructions */}
        <div className="w-full md:w-[45%]">
          <h2 className="text-xl font-semibold text-green-500">Ingredients</h2>
          <ul className="mt-3 list-disc list-inside text-gray-600 space-y-2">
            {ingredients_quantity && ingredients_quantity.length > 0 ? (
              ingredients_quantity.map((ingredient, index) => (
                <li key={index} className="hover:text-green-500 transition-colors">{ingredient}</li>
              ))
            ) : (
              <li>No ingredients listed.</li>
            )}
          </ul>

          <h2 className="text-xl font-semibold text-green-500 mt-6">Instructions</h2>
          <ol className="mt-3 list-decimal list-inside text-gray-600 space-y-2">
            {instruction && instruction.length > 0 ? (
              instruction.map((instruction, index) => (
                <li key={index} className="hover:text-green-500 transition-colors">{instruction}</li>
              ))
            ) : (
              <li>No instructions provided.</li>
            )}
          </ol>
        </div>
      </div>

      {/* Save Recipe Button */}
      <div className="text-center mb-10">
        <button className="px-6 py-3 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-400 transition-colors">
          Save Recipe
        </button>
      </div>

      <Footer />
    </div>

  );
};

export default RecipeDetailPage;
