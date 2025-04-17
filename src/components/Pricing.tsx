import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '₹1,999',
      description: 'Perfect for small parcels',
      features: [
        'Up to 100kg weight',
        'Standard delivery time',
        'Basic tracking',
        'Email support'
      ]
    },
    {
      name: 'Premium',
      price: '₹4,999',
      description: 'Ideal for regular shipping',
      features: [
        'Up to 500kg weight',
        'Priority delivery',
        'Real-time tracking',
        '24/7 phone support',
        'Insurance coverage'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large scale operations',
      features: [
        'Unlimited weight',
        'Express delivery',
        'Advanced tracking',
        'Dedicated support',
        'Full insurance coverage',
        'Custom solutions'
      ]
    }
  ];

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-blue-400 to-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl p-8 hover:transform hover:-translate-y-1 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">{plan.price}</div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full mt-8 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;