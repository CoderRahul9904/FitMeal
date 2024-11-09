

function WorkingFlow() {
  return (
    <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-2xl font-semibold text-center mb-8">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {['Search Recipes', 'Save to Dashboard', 'Track Nutrition','Share Your Recipes'].map((step, index) => (
            <div key={index} className="flex-1 text-center">
              <div className="bg-green-500 text-white rounded-full h-16 w-16 flex items-center justify-center mx-auto text-2xl mb-4">
                {index + 1}
              </div>
              <h3 className="font-semibold text-xl">{step}</h3>
              <p className="text-gray-600 mt-2">Brief description of the step.</p>
            </div>
          ))}
        </div>
      </section>
  )
}

export default WorkingFlow