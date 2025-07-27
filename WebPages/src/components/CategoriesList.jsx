import React from 'react'


const categories = ["All", "Data Structure", "Graphs", "Databases"]


function Category({ name }) {
  return (
    <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-[20px] shadow-sm hover:bg-gray-300 cursor-pointer">
      {name}
    </div>
  )
}


export default function CategoriesList() {
  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <div className="flex flex-wrap gap-4">
        {categories.map((category, index) => (
          <Category key={index} name={category} />
        ))}
      </div>
    </div>
  )
}
