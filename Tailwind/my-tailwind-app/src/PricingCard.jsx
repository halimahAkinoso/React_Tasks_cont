import React from 'react'

function PricingCard ({ title, price, features=[], isPopular }) {
  return (
   <div className={`
      bg-white rounded-2xl shadow-lg p-8 
      ${isPopular ? 'border-4 border-naija-green transform scale-105' : 'border border-gray-200'}
    `}>
      {/* Popular Badge */}
      {isPopular && (
        <div className="bg-naija-green text-white text-xs font-bold uppercase px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      
      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      
      {/* Price */}
      <div className="mt-4">
        <span className="text-5xl font-extrabold text-gray-900">₦{price}</span>
        <span className="text-gray-600">/month</span>
      </div>
      
      {/* Features */}
      <ul className="mt-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-6 h-6 text-naija-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="ml-3 text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      {/* Button */}
      <button className={`
        mt-8 w-full py-3 px-6 rounded-lg font-semibold text-lg
        ${isPopular 
          ? 'bg-naija-green text-white' 
          : 'bg-gray-100 text-gray-800 border-2 border-gray-300'
        }
      `}>
        Get Started
      </button>
    </div>
  )
}

export default PricingCard