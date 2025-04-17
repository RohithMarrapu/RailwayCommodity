import React from 'react';

interface ExpressTrain {
  id: string;
  name: string;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  status: 'Available' | 'Waiting List';
}

interface SearchTrainsProps {
  onNavigate: (page: string) => void;
}

const SearchTrains = ({ onNavigate }: SearchTrainsProps) => {
  const expressTrains: ExpressTrain[] = [
    {
      id: '101',
      name: 'Express 101',
      from: 'Noida',
      to: 'Bengaluru',
      departure: '10:00 AM',
      arrival: '2:00 PM',
      status: 'Available'
    },
    {
      id: '102',
      name: 'Express 102',
      from: 'Kolkata',
      to: 'Delhi',
      departure: '11:00 AM',
      arrival: '3:00 PM',
      status: 'Waiting List'
    },
    {
      id: '103',
      name: 'Express 103',
      from: 'Mumbai',
      to: 'Agra',
      departure: '12:00 PM',
      arrival: '4:00 PM',
      status: 'Available'
    }
  ];

  const handleBookNow = (train: ExpressTrain) => {
    onNavigate('booking');
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Available Trains</h2>
        <div className="space-y-4">
          {expressTrains.map((train) => (
            <div key={train.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{train.name}</h3>
                  <p className="text-gray-600">{train.from} to {train.to}</p>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm text-gray-600">Departure: {train.departure}</p>
                    <p className="text-sm text-gray-600">Arrival: {train.arrival}</p>
                    <p className="text-sm">
                      Status: 
                      <span className={`ml-2 ${
                        train.status === 'Available' 
                          ? 'text-green-600' 
                          : 'text-red-600'
                      }`}>
                        {train.status}
                      </span>
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => handleBookNow(train)}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="mt-8 bg-gray-50 py-4">
        <p className="text-sm text-gray-500 text-center">
          © 2024 Railway Reservation System
        </p>
      </footer>
    </div>
  );
};

export default SearchTrains;