import React, { useEffect, useState } from 'react';
import PackageCard from './components/PackageCard';

function App() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/packages')
      .then(res => res.json())
      .then(data => setPackages(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">Travellia - Explore Destinations</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {packages.map((pack) => (
          <PackageCard key={pack.id} pack={pack} />
        ))}
      </div>
    </div>
  );
}

export default App;
