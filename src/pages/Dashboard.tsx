import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MealPlan from "../components/MealPlan";
import Overview from "../components/Overview";
// import Profile from "../components/Profile";
import SavedRecipe from "../components/SavedRecipe";
import Info from "./Info";


function Dashboard() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 flex flex-col justify-around">
      <Header />
      <Info />
      <main className="w-screen mx-auto py-8 px-6">
        <SavedRecipe />
        <Overview />
        <Categories />
        <MealPlan />
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard;
