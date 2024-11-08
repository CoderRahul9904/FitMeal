

const Footer = () => {
    return (
        <footer className="bg-white shadow-md py-6 mt-16">
        <div className="max-w-screen-lg mx-auto px-6 flex justify-between items-center">
          <p className="text-gray-700">&copy; 2024 FitMeal. All rights reserved.</p>
          <div className="space-x-4">
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
