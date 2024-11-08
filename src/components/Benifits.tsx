

function Benifits() {
  return (
    <section className="py-12 px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">Why Choose FitMeal?</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {['Personalized Recommendations', 'Save Your Favorites', 'Get Nutritional Info','Share your recipe with World'].map((benefit) => (
            <div key={benefit} className="flex-1 bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="font-semibold text-xl text-green-600">{benefit}</h3>
              <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
    </section>
  )
}

export default Benifits