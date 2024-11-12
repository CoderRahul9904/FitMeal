import { useNavigate } from "react-router-dom"

function Header() {
    const navigate=useNavigate()
    const handleHome=()=>{
        navigate('/')
    }
    const handleDashboard=()=>{
        navigate('/dashboard')
    }
    const handleFeatures=()=>{
        navigate('/features')
    }
    const handleLogin=()=>{
        navigate('/login')
    }
    const handleRecipes=()=>{
        navigate('/search')
    }
    return (
        <>
            <header className="bg-white shadow-md">
                    <div className="max-w-4xl mx-auto p-4 flex justify-between items-center">
                        <div className="text-green-600 font-bold text-xl">FIT MEAL</div>
                        <nav className="space-x-4">
                            <a onClick={handleHome} className="text-gray-700 hover:text-green-600 cursor-pointer" >Home</a>
                            <a onClick={handleRecipes} className="text-gray-700 hover:text-green-600 cursor-pointer">Recipes</a>
                            <a onClick={handleFeatures} className="text-gray-700 hover:text-green-600 cursor-pointer">Features</a>
                            <a onClick={handleDashboard} className="text-gray-700 hover:text-green-600 cursor-pointer">Dashboard</a>
                            <a onClick={handleLogin} className="text-gray-700 hover:text-green-600 cursor-pointer">Login</a>
                        </nav>
                    </div>
                </header>
        </>
    )
}

export default Header