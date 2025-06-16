import React from 'react';

export default function PackageCard({ pack }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={pack.img} alt={pack.title} className="h-48 w-full object-cover"/>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{pack.title}</h2>
        <p className="text-green-600 font-bold">₹{pack.price}</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          View Details
        </button>
      </div>
    </div>
  );
}
