import React, { useState, useEffect } from 'react';
import { getBookingByPNR } from './Booking'; // Import the function from your Booking component

const TrackParcel = () => {
  const [trackingId, setTrackingId] = useState('');
  const [trackingResult, setTrackingResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Status progression logic
  const getNextStatus = (currentStatus: string): string => {
    switch (currentStatus) {
      case 'Pending': return 'In Transit';
      case 'In Transit': return 'Delivered';
      default: return currentStatus;
    }
  };

  // Generate mock tracking data based on booking
  const generateTrackingData = (booking: any) => {
    const status = getNextStatus(booking.status);
    const statusHistory = [
      { date: new Date(booking.date).toISOString(), status: 'Booking Confirmed', location: booking.source }
    ];

    if (status === 'In Transit') {
      statusHistory.push({
        date: new Date(new Date(booking.date).getTime() + 86400000).toISOString(),
        status: 'In Transit',
        location: 'In Transit'
      });
    } else if (status === 'Delivered') {
      statusHistory.push(
        {
          date: new Date(new Date(booking.date).getTime() + 86400000).toISOString(),
          status: 'In Transit',
          location: 'In Transit'
        },
        {
          date: new Date(new Date(booking.date).getTime() + 172800000).toISOString(),
          status: 'Delivered',
          location: booking.destination
        }
      );
    }

    return {
      ...booking,
      status,
      currentLocation: status === 'Pending' ? booking.source : 
                       status === 'In Transit' ? 'In Transit' : booking.destination,
      estimatedDelivery: new Date(new Date(booking.date).getTime() + 172800000).toISOString().split('T')[0],
      history: statusHistory
    };
  };

  const handleTrack = () => {
    if (!trackingId) {
      setError('Please enter a PNR number');
      return;
    }

    setIsLoading(true);
    setError('');
    setTrackingResult(null);
    
    // Simulate API call
    setTimeout(() => {
      const booking = getBookingByPNR(trackingId);
      if (booking) {
        const trackingData = generateTrackingData(booking);
        setTrackingResult(trackingData);
      } else {
        setError('No booking found with this PNR');
      }
      setIsLoading(false);
    }, 1000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'In Transit': return 'bg-blue-100 text-blue-800';
      case 'Delivered': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <div className="relative min-h-[500px] bg-gradient-to-r from-blue-400 to-blue-600">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-black/80 p-6 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">TRACK YOUR PARCEL</h2>
            <div className="flex space-x-2 mb-4">
              <input
                type="text"
                value={trackingId}
                onChange={(e) => {
                  setTrackingId(e.target.value.toUpperCase());
                  setTrackingResult(null);
                  setError('');
                }}
                placeholder="Enter your PNR"
                className="flex-1 px-4 py-2 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                maxLength={10}
              />
              <button 
                onClick={handleTrack}
                disabled={isLoading}
                className={`px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? 'Tracking...' : 'Track Now'}
              </button>
            </div>
            {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

            {trackingResult && (
              <div className="bg-white/90 rounded-lg p-4 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h3 className="font-bold text-lg">Booking Details</h3>
                    <p><strong>PNR:</strong> {trackingResult.pnr}</p>
                    <p><strong>Route:</strong> {trackingResult.source} → {trackingResult.destination}</p>
                    <p><strong>Commodity:</strong> {trackingResult.commodity}</p>
                    <p><strong>Weight:</strong> {trackingResult.weight} kg</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Current Status</h3>
                    <p>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(trackingResult.status)}`}>
                        {trackingResult.status}
                      </span>
                    </p>
                    <p><strong>Location:</strong> {trackingResult.currentLocation}</p>
                    <p><strong>Estimated Delivery:</strong> {trackingResult.estimatedDelivery}</p>
                  </div>
                </div>

                <h3 className="font-bold text-lg mb-2">Tracking History</h3>
                <div className="space-y-2">
                  {trackingResult.history.map((item: any, index: number) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-3 h-3 mt-1.5 bg-blue-500 rounded-full"></div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">{item.status}</p>
                        <p className="text-xs text-gray-600">
                          {formatDate(item.date)} | {item.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackParcel;