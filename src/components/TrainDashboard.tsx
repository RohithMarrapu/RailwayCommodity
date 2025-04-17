import React from 'react';

interface Train {
  name: string;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  availability: 'Available' | 'Waiting List';
}

const TrainDashboard = () => {
  const trains: Train[] = [
    {
      name: 'Superfast',
      from: 'Siliguri',
      to: 'Katni',
      departure: '02:52 AM',
      arrival: '05:24 PM',
      availability: 'Available',
    },
    {
      name: 'Superfast',
      from: 'Katni',
      to: 'Kochi',
      departure: '06:20 AM',
      arrival: '07:46 PM',
      availability: 'Available',
    },
    {
      name: 'Shatabdi',
      from: 'Dehradun',
      to: 'Shimla',
      departure: '01:02 PM',
      arrival: '01:43 PM',
      availability: 'Waiting List',
    },
    {
      name: 'Superfast',
      from: 'Gwalior',
      to: 'Delhi',
      departure: '04:50 PM',
      arrival: '09:51 AM',
      availability: 'Available',
    },
    {
      name: 'Local',
      from: 'Kullu',
      to: 'Pune',
      departure: '01:18 AM',
      arrival: '06:26 PM',
      availability: 'Waiting List',
    },
    {
      name: 'Superfast',
      from: 'Lucknow',
      to: 'Mysore',
      departure: '01:58 PM',
      arrival: '12:56 PM',
      availability: 'Available',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-navy-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Railway Reservation</h1>
          <nav className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">Trains</a>
            <a href="#" className="hover:text-gray-300">Login</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Random Train Timetable</h2>
              <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                Generate Timetable
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Train Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      From
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      To
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Departure
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Arrival
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Availability
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {trains.map((train, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {train.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {train.from}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {train.to}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {train.departure}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {train.arrival}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            train.availability === 'Available'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {train.availability}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <footer className="bg-gray-50 px-6 py-4">
            <p className="text-sm text-gray-500 text-center">
              © 2024 Railway Reservation System
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default TrainDashboard;