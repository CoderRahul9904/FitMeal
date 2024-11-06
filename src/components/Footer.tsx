

const Footer = () => {
    return (
        <footer className="bg-white shadow-md mt-16">
            <div className="max-w-screen h-auto mx-auto p-4 flex justify-between items-center">
                <div className="text-gray-700">
                    <p>&copy; 2024 FitMeal. All rights reserved.</p>
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-700 hover:text-green-600"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="text-gray-700 hover:text-green-600"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="text-gray-700 hover:text-green-600"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="text-gray-700 hover:text-green-600"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </footer>

    );
};

export default Footer
