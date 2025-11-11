import React from 'react'
import './App.css'
import PricingCard from './PricingCard'
import PricingSection from './PricingSection'


const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>

   <div className="p-8 space-y-4">
      <div className="border p-4">Border (1px)</div>
      <div className="border-2 p-4">Border 2 (2px)</div>
      <div className="border-4 p-4">Border 4 (4px)</div>
      <div className="border-8 p-4">Border 8 (8px)</div>
      
      {/* Directional borders */}
      <div className="border-t-4 p-4">Top border</div>
      <div className="border-r-4 p-4">Right border</div>
      <div className="border-b-4 p-4">Bottom border</div>
      <div className="border-l-4 p-4">Left border</div>
    </div>
{/* ### **Border Color** */}
      <div className="p-8 space-y-4">
      <div className="border-4 border-red-500 p-4">Red Border</div>
      <div className="border-4 border-blue-600 p-4">Blue Border</div>
      <div className="border-4 border-green-700 p-4">Green Border</div>
      <div className="border-4 border-naija-green p-4">Naija Green Border</div>
      <div className="border-4 border-gray-300 p-4">Gray Border</div>
    </div>

    {/* ### **Border Radius (Rounded Corners)**
     */}

     <div className="p-8 space-y-4">
      <div className="bg-blue-500 p-4 rounded-none">No Rounding</div>
      <div className="bg-blue-500 p-4 rounded-sm">Small Rounding</div>
      <div className="bg-blue-500 p-4 rounded">Default Rounding</div>
      <div className="bg-blue-500 p-4 rounded-md">Medium Rounding</div>
      <div className="bg-blue-500 p-4 rounded-lg">Large Rounding</div>
      <div className="bg-blue-500 p-4 rounded-xl">XL Rounding</div>
      <div className="bg-blue-500 p-4 rounded-2xl">2XL Rounding</div>
      <div className="bg-blue-500 p-4 rounded-3xl">3XL Rounding</div>
      <div className="bg-blue-500 p-4 rounded-full">Full Rounding</div>
      
      {/* Individual corners */}
      <div className="bg-green-500 p-4 rounded-tl-lg">Top-left rounded</div>
      <div className="bg-green-500 p-4 rounded-tr-lg">Top-right rounded</div>
      <div className="bg-green-500 p-4 rounded-br-lg">Bottom-right rounded</div>
      <div className="bg-green-500 p-4 rounded-bl-lg">Bottom-left rounded</div>
    </div>

    {/* ### **Nigerian Profile Card** */}

    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header with Nigerian colors */}
      <div className="h-32 bg-gradient-to-r from-green-600 via-white to-green-600"></div>
      
      {/* Avatar */}
      <div className="relative px-6 -mt-16">
        <div className="w-32 h-32 bg-gray-300 rounded-full border-4 border-white mx-auto"></div>
      </div>
      
      {/* Content */}
      <div className="text-center px-6 py-4">
        <h2 className="text-2xl font-bold text-gray-800">Chidi Okafor</h2>
        <p className="text-gray-600 mt-1">Software Developer</p>
        <p className="text-sm text-gray-500 mt-2">Lagos, Nigeria 🇳🇬</p>
        
        {/* Bio */}
        <p className="text-gray-700 mt-4 text-sm leading-relaxed">
          Passionate about building amazing web applications with React and Tailwind CSS.
        </p>
        
        {/* Stats */}
        <div className="flex justify-around mt-6 pt-6 border-t border-gray-200">
          <div>
            <p className="text-2xl font-bold text-naija-green">1.2k</p>
            <p className="text-xs text-gray-600 uppercase">Followers</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-naija-green">48</p>
            <p className="text-xs text-gray-600 uppercase">Projects</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-naija-green">520</p>
            <p className="text-xs text-gray-600 uppercase">Following</p>
          </div>
        </div>
        
        {/* Button */}
        <button className="mt-6 w-full bg-naija-green text-white font-semibold py-3 rounded-lg">
          Follow
        </button>
      </div>
    </div>

      <div>
     <PricingCard 
     
  // title="Basic Plan"
  // price="5000"
  // features={["Feature A", "Feature B"]}
  // isPopular={false}
/>
     
     <PricingSection />
   </div>

    </div>
   
  )
}

export default App