

function Header() {
    return (
        <>
            <header className="bg-white shadow-md">
                    <div className="max-w-4xl mx-auto p-4 flex justify-between items-center">
                        <div className="text-green-600 font-bold text-xl">FIT MEAL</div>
                        <nav className="space-x-4">
                            <a href="#" className="text-gray-700 hover:text-green-600">Home</a>
                            <a href="#" className="text-gray-700 hover:text-green-600">Dashboard</a>
                            <a href="#" className="text-gray-700 hover:text-green-600">Features</a>
                            <a href="#" className="text-gray-700 hover:text-green-600">Login</a>
                        </nav>
                    </div>
                </header>
        </>
    )
}

export default Header