import React from 'react'
import PricingCard from './PricingCard'

function PricingSection () {
    const plans = [
    {
      title: 'Basic',
      price: '5,000',
      features: [
        '10 Projects',
        '5GB Storage',
        'Basic Support',
        'Community Access'
      ],
      isPopular: false
    },
    {
      title: 'Professional',
      price: '15,000',
      features: [
        'Unlimited Projects',
        '50GB Storage',
        'Priority Support',
        'Advanced Analytics',
        'Team Collaboration'
      ],
      isPopular: true
    },
    {
      title: 'Enterprise',
      price: '50,000',
      features: [
        'Unlimited Everything',
        '500GB Storage',
        '24/7 Dedicated Support',
        'Custom Integrations',
        'Advanced Security'
      ],
      isPopular: false
    }
  ];
  return (
<div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Choose Your Plan
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Start building amazing projects today 🇳🇬
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>

  )
}

export default PricingSection