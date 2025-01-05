import { useEffect } from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MealPlan from "../components/MealPlan";
import Overview from "../components/Overview";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "../graphql/queries";
// import Profile from "../components/Profile";
import SavedRecipe from "../components/SavedRecipe";
import Info from "./Info";
// import { userProfileInfo } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import Logout from "../components/Logout";



// useEffect(()=>{
//   const navigate=useNavigate()
//   const {error,loading,data}=useQuery(getUserInfo)
//   if(error) navigate("/login")
//   console.log(data)
// },[])

function Dashboard() {
  const navigate = useNavigate();
  const { error, loading, data } = useQuery(getUserInfo);
  useEffect(() => {
    if (error) {
      navigate("/login");
    }
    
    console.log(data);
  }, [error, data, navigate]);
  if(loading) return <p>Loading......</p>
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 flex flex-col justify-around">
      <Header />
      <Info />
      <main className="w-screen mx-auto py-8 px-6">
        <SavedRecipe />
        <Overview />
        <Categories />
        <MealPlan />
        <Logout />
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard;



// import React from "react";

// const Dashboard = () => {
//   return (
//     <div className="min-h-screen bg-white flex flex-col items-center py-10 px-5">
//       {/* Profile Card */}
//       <div className="bg-green-500 w-full max-w-lg rounded-lg shadow-lg p-8">
//         <div className="flex items-center justify-center relative">
//           <img
//             src="https://via.placeholder.com/100" // Placeholder image
//             alt="Profile Picture"
//             className="w-24 h-24 rounded-full border-4 border-white"
//           />
//           <button className="absolute bottom-0 right-28 bg-orange-500 text-white rounded-full p-2 shadow-md hover:bg-orange-600">
//             Edit
//           </button>
//         </div>
//         <div className="text-center mt-5">
//           <h2 className="text-2xl font-semibold text-white">Your Name</h2>
//           <p className="text-sm text-green-200">Current Weight: 70kg</p>
//         </div>
//       </div>

//       {/* Action Cards */}
//       <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
//         {/* Create New Recipe */}
//         <div className="bg-white border border-green-500 rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
//           <div className="w-14 h-14 bg-green-500 text-white flex items-center justify-center rounded-full mb-4">
//             <i className="fas fa-utensils text-xl"></i>
//           </div>
//           <h3 className="text-lg font-semibold text-green-500">Create New Recipe</h3>
//           <p className="text-sm text-gray-500 mt-2">
//             Add and share your delicious recipes with others.
//           </p>
//           <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition">
//             Add Recipe
//           </button>
//         </div>

//         {/* Personalize Diet Plans */}
//         <div className="bg-white border border-green-500 rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
//           <div className="w-14 h-14 bg-green-500 text-white flex items-center justify-center rounded-full mb-4">
//             <i className="fas fa-leaf text-xl"></i>
//           </div>
//           <h3 className="text-lg font-semibold text-green-500">Personalize Diet Plan</h3>
//           <p className="text-sm text-gray-500 mt-2">
//             Create a diet plan that suits your lifestyle and goals.
//           </p>
//           <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition">
//             Create Plan
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
