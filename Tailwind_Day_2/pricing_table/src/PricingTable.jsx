// PricingTable.jsx
import React from 'react';

const plans = [
  {
    title: 'Basic',
    price: '₦5,000/month',
    features: ['1 User', 'Basic Support', 'Access to Core Features'],
    highlighted: false,
  },
  {
    title: 'Pro',
    price: '₦15,000/month',
    features: ['5 Users', 'Priority Support', 'Advanced Features', 'Analytics Dashboard'],
    highlighted: true,
  },
  {
    title: 'Enterprise',
    price: '₦50,000/month',
    features: ['Unlimited Users', 'Dedicated Support', 'Custom Solutions', 'Team Management'],
    highlighted: false,
  },
];

const PricingTable = () => {
  return (
    <div className="bg-green-50 py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-[#008753] mb-10">Choose Your Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-md p-6 flex flex-col justify-between ${
              plan.highlighted
                ? 'bg-[#008753] text-white scale-105 border-4 border-green-700'
                : 'bg-white text-gray-800'
            } transition-transform`}
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-2xl font-bold mb-4">{plan.price}</p>
              <ul className="space-y-2 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2">✅</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className={`mt-6 px-4 py-2 rounded font-semibold ${
                plan.highlighted
                  ? 'bg-white text-[#008753] hover:bg-green-100'
                  : 'bg-[#008753] text-white hover:bg-green-600'
              } transition-colors`}
            >
              Select Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;