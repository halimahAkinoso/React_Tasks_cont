import React from 'react';

const ColorDisplay = () => {
  const colors = [
    { name: 'Nigerian Green', hex: '#008753', class: 'bg-[#008753]' },
    { name: 'White', hex: '#FFFFFF', class: 'bg-[#FFFFFF]' },
    { name: 'Naija Green 50', hex: '#F0FDF4', class: 'bg-green-50' },
    { name: 'Naija Green 100', hex: '#DCFCE7', class: 'bg-green-100' },
    { name: 'Naija Green 200', hex: '#BBF7D0', class: 'bg-green-200' },
    { name: 'Naija Green 300', hex: '#86EFAC', class: 'bg-green-300' },
    { name: 'Naija Green 400', hex: '#4ADE80', class: 'bg-green-400' },
    { name: 'Naija Green 500', hex: '#22C55E', class: 'bg-green-500' },
    { name: 'Naija Green 600', hex: '#16A34A', class: 'bg-green-600' },
    { name: 'Naija Green 700', hex: '#15803D', class: 'bg-green-700' },
    { name: 'Naija Green 800', hex: '#166534', class: 'bg-green-800' },
    { name: 'Naija Green 900', hex: '#14532D', class: 'bg-green-900' },
    { name: 'Naija Green 950', hex: '#0F3D20', class: 'bg-green-950' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Nigerian Flag and Naija Green Shades</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {colors.map((color, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-lg shadow-md ${color.class}`}></div>
            <div className="mt-2 text-center">
              <p className="font-semibold text-sm">{color.name}</p>
              <p className="text-xs text-gray-500">{color.hex}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorDisplay;
