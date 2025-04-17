import React, { useState } from 'react';

const TrackParcel = () => {
  const [trackingId, setTrackingId] = useState('');

  return (
    <div className="relative h-[500px] bg-gradient-to-r from-blue-400 to-blue-600">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-md">
          <div className="bg-black/80 p-6 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">TRACK YOUR PARCEL</h2>
            <div className="flex space-x-2">
              <input
                type="text"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                placeholder="Enter your 10-digit PNR"
                className="flex-1 px-4 py-2 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
              <button className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                Track Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackParcel;