import React from 'react';

const trendingCategories = [
  { category: 'Graphs', count: 100 },
  { category: 'Stacks', count: 45 },
  { category: 'Algorthims', count: 20 },
  { category: 'Databases', count: 3 }
];

const TrendingCategoriesBox = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Trending Categories</h2>
      <ul className="space-y-3">
        {trendingCategories.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
          >
            <span className="text-black font-medium">{item.category}</span>
            <span className="bg-green-500 text-black text-sm font-semibold px-3 py-1 rounded-full">
              {item.count} 
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingCategoriesBox;