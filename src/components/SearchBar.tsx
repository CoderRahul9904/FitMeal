import React from 'react'

function SearchBar() {
    return (
        <>
            <input
                type="text"
                placeholder="Search recipes..."
                className="flex-grow p-3 rounded-l-lg border-t border-b border-l border-gray-300"
            />
            <button className="bg-green-500 text-white px-6 rounded-r-lg">Search</button>
        </>

    )
}

export default SearchBar