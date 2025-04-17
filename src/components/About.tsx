import React from 'react';
import { Package, Train } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-white">
      <div className="relative h-[300px] bg-gradient-to-r from-blue-400 to-blue-600">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">ABOUT US</h1>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              We are dedicated to providing efficient and reliable commodity transportation services through India's extensive railway network. Our mission is to simplify the process of railway commodity reservation while ensuring the safe and timely delivery of goods across the nation.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Why Choose Us</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Train className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold">Extensive Network</h3>
                  <p className="text-gray-600">Access to all major railway routes across India</p>
                </div>
              </li>
              <li className="flex items-start">
                <Package className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold">Secure Transportation</h3>
                  <p className="text-gray-600">Advanced tracking and security measures for your goods</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;