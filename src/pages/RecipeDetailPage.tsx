

const RecipeDetailPage = () => {
//   const { id } = useParams();
//   const [recipe, setRecipe] = useState(null);
//   const [videoId, setVideoId] = useState(null);
//   const YOUTUBE_API_KEY = 'YOUR_YOUTUBE_API_KEY';

//   useEffect(() => {
//     // Fetch recipe data by ID
//     const fetchRecipe = async () => {
//       try {
//         const response = await fetch(`/api/recipes/${id}`);
//         const data = await response.json();
//         setRecipe(data);
        
//         // Fetch YouTube video based on recipe name
//         fetchYouTubeVideo(data.name);
//       } catch (error) {
//         console.error("Error fetching recipe:", error);
//       }
//     };

//     // Fetch the YouTube video ID based on recipe name
//     const fetchYouTubeVideo = async (recipeName) => {
//       try {
//         const response = await fetch(
//           `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(
//             recipeName
//           )}&key=${YOUTUBE_API_KEY}`
//         );
//         const data = await response.json();
//         if (data.items.length > 0) {
//           setVideoId(data.items[0].id.videoId);
//         }
//       } catch (error) {
//         console.error("Error fetching YouTube video:", error);
//       }
//     };

//     fetchRecipe();
//   }, [id]);

//   if (!recipe) {
//     return <div>Loading...</div>;
//   }
const recipe = {
    name: "Mexican Style Red Chicken Chilaquiles Recipe",
    description: "Mexican Style Red Chilaquiles Recipe is a tortilla casserole, which contains a tangy tomato sauce mixed with shredded chicken and toasted tortillas chips...",
    cuisine: "Mexican",
    course: "Appetizer",
    diet: "Non Vegetarian",
    ingredients_name: "Tortillas, Cheese, Chicken breasts, Dried Thyme Leaves, Onion, Garlic, Tomatoes...",
    ingredients_quantity: "2 Tortillas, 2 tablespoons Cheese, 150 grams Chicken breasts...",
    prep_time: 10,
    cook_time: 25,
    instructions: "To begin making the Mexican Style Red Chilaquiles Recipe, preheat the oven to 180 degrees Celsius...",
    image_url: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl_sunitha/Mexican_Style_Red_Chilaquiles_Recipe.jpg"
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold mb-2">{recipe.name}</h1>
      
      
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Watch Recipe Video</h2>
          <iframe
            width="100%"
            height="400"
            
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
      
      
      <img src={recipe.image_url} alt={recipe.name} className="w-full h-64 object-cover mb-4 rounded-lg" />
      <p className="mb-4"><strong>Description:</strong> {recipe.description}</p>
      <p className="mb-4"><strong>Cuisine:</strong> {recipe.cuisine}</p>
      <p className="mb-4"><strong>Course:</strong> {recipe.course}</p>
      <p className="mb-4"><strong>Diet:</strong> {recipe.diet}</p>
      <p className="mb-4"><strong>Preparation Time:</strong> {recipe.prep_time} minutes</p>
      <p className="mb-4"><strong>Cooking Time:</strong> {recipe.cook_time} minutes</p>
      <p className="mb-4"><strong>Ingredients:</strong> {recipe.ingredients_name} ({recipe.ingredients_quantity})</p>
      <p className="mb-4"><strong>Instructions:</strong> {recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetailPage;
