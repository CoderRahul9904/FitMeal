import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Features from "./pages/Features"
import HomePage from "./pages/HomePage"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Recipes from "./pages/Recipes"
import RecipeDetailPage from "./pages/RecipeDetailPage"
import CommunityRecipeDetailsPage from "./pages/CommunityRecipeDetailsPage"

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Recipes/:RecipeId" element={<RecipeDetailPage />}></Route>
          <Route path="/Community/Recipes/:RecipeId" element={<CommunityRecipeDetailsPage />}></Route>
          <Route path="/Recipes" element={<Recipes />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
