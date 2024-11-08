

function Categories() {
  return (
    <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-2xl font-semibold text-center mb-8">Explore by Categories</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['Low-Carb', 'Vegan', 'High-Protein', 'Quick Meals'].map((category) => (
            <button key={category} className="bg-green-500 text-white px-4 py-2 rounded-md">{category}</button>
          ))}
        </div>
    </section>
  )
}

export default Categories