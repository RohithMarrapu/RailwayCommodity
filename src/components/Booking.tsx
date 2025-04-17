import React, { useState, useEffect } from 'react';

interface BookingData {
  source: string;
  destination: string;
  commodity: string;
  weight: string;
  date: string;
  contactName: string;
  phone: string;
  email: string;
}

const Booking = () => {
  const [formData, setFormData] = useState<BookingData>({
    source: '',
    destination: '',
    commodity: '',
    weight: '',
    date: '',
    contactName: '',
    phone: '',
    email: ''
  });

  const [pendingBookings, setPendingBookings] = useState<BookingData[]>([
    {
      source: 'Delhi',
      destination: 'Mumbai',
      commodity: 'Electronics',
      weight: '100',
      date: '2025-04-20',
      contactName: 'Amit Sharma',
      phone: '9876543210',
      email: 'amit@example.com'
    },
    {
      source: 'Chennai',
      destination: 'Bangalore',
      commodity: 'Furniture',
      weight: '200',
      date: '2025-04-21',
      contactName: 'Priya Menon',
      phone: '9876501234',
      email: 'priya@example.com'
    }
  ]);

  const [showForm, setShowForm] = useState(true); // Changed to true by default
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // This ensures the form is shown when navigating to the booking page
    setShowForm(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setPendingBookings([...pendingBookings, formData]);
      setFormData({
        source: '',
        destination: '',
        commodity: '',
        weight: '',
        date: '',
        contactName: '',
        phone: '',
        email: ''
      });
      setShowForm(false);
      setIsSubmitting(false);
    }, 1000);
  };

  const handleDelete = (index: number) => {
    const updated = pendingBookings.filter((_, i) => i !== index);
    setPendingBookings(updated);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-blue-400 to-blue-600 py-12">
      <div className="max-w-5xl mx-auto px-4">
        {!showForm ? (
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Pending Bookings</h2>
              <button
                onClick={() => setShowForm(true)}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Add New Booking
              </button>
            </div>

            {pendingBookings.length > 0 ? (
              <ul className="space-y-4">
                {pendingBookings.map((booking, index) => (
                  <li
                    key={index}
                    className="border border-gray-200 rounded-md p-4 flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="flex-1">
                      <p><strong>From:</strong> {booking.source} → <strong>To:</strong> {booking.destination}</p>
                      <p><strong>Commodity:</strong> {booking.commodity} | <strong>Weight:</strong> {booking.weight} kg</p>
                      <p><strong>Date:</strong> {booking.date}</p>
                      <p><strong>Contact:</strong> {booking.contactName}, {booking.phone}, {booking.email}</p>
                    </div>
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-600 hover:text-red-800 border border-red-200 px-4 py-2 rounded-md transition"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No pending bookings.</p>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Book Your Commodity Transport</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Source Station</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md border border-gray-300"
                    value={formData.source}
                    onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Destination Station</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md border border-gray-300"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Commodity Type</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md border border-gray-300"
                    value={formData.commodity}
                    onChange={(e) => setFormData({ ...formData, commodity: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Weight (in kg)</label>
                  <input
                    type="number"
                    min="1"
                    className="w-full px-4 py-2 rounded-md border border-gray-300"
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 rounded-md border border-gray-300"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-md border border-gray-300"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      pattern="[0-9]{10}"
                      className="w-full px-4 py-2 rounded-md border border-gray-300"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-md border border-gray-300"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-6">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-2 border border-gray-400 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Booking'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;