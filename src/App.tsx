import React, { useState, useEffect } from 'react';
import { Train, Package, LightbulbIcon, User, Home } from 'lucide-react';
import Navbar from './components/Navbar';
import TrackParcel from './components/TrackParcel';
import Services from './components/Services';
import Login from './components/Login';
import TrainDashboard from './components/TrainDashboard';
import SearchTrains from './components/SearchTrains';
import About from './components/About';
import Booking from './components/Booking';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLogin = localStorage.getItem('isLoggedIn');
    if (storedLogin === 'true') {
      setIsLoggedIn(true);
      setCurrentPage('home');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    setCurrentPage('login');
  };

  const renderPage = () => {
    if (!isLoggedIn) {
      return (
        <Login
          onLoginSuccess={() => {
            setIsLoggedIn(true);
            setCurrentPage('home');
          }}
        />
      );
    }

    switch (currentPage) {
      case 'dashboard':
        return <TrainDashboard />;
      case 'search':
        return <SearchTrains onNavigate={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'booking':
        return <Booking />;
      case 'pricing':
        return <Pricing />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <>
            <TrackParcel />
            <Services />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {isLoggedIn && (
        <Navbar onNavigate={setCurrentPage} currentPage={currentPage} onLogout={handleLogout} />
      )}
      {renderPage()}
    </div>
  );
}

export default App;
