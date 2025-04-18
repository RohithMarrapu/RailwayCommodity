import React from 'react';
import { Train } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage, onLogout }) => {
  const navItems = [
    { label: 'HOME', value: 'home' },
    { label: 'ABOUT', value: 'about' },
    { label: 'BOOKING', value: 'booking' },
    { label: 'TRAINS', value: 'search' },
    { label: 'DASHBOARD', value: 'dashboard' },
    { label: 'PRICING', value: 'pricing' },
    { label: 'CONTACT', value: 'contact' }
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <Train className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-semibold">Railway Commodity Reservation</span>
          </div>
          <div className="flex items-center space-x-4">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className={`px-3 py-2 rounded-md transition-colors ${
                  currentPage === item.value
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={onLogout}
              className="px-3 py-2 rounded-md text-red-600 hover:bg-red-50 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
