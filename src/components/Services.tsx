import React from 'react';
import { Package, Train, LightbulbIcon } from 'lucide-react';

const Services = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">WHAT WE OFFER</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="PARCEL EXPRESS TRAIN"
            description="The current list of parcel express trains that can transport packages"
            image="https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80"
            icon={<Train className="h-8 w-8 text-red-600" />}
          />
          <ServiceCard
            title="PARCEL SERVICE"
            description="Information about the parcel services provided by Indian Railways"
            image="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80"
            icon={<Package className="h-8 w-8 text-red-600" />}
          />
          <ServiceCard
            title="AUTHENTIC STRATEGIES"
            description="Information on the discounts Indian Railways is offering on parcel services"
            image="https://images.unsplash.com/photo-1501526029524-a8ea952b15be?auto=format&fit=crop&q=80"
            icon={<LightbulbIcon className="h-8 w-8 text-red-600" />}
          />
        </div>
      </div>
    </div>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="h-48 relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Services;