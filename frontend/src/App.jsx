import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Carsoule from './Components/Carsoule'
import Aboutus from './Components/AboutUs/Aboutus'
import Community from './Components/Community/Community'
import Shop from './Components/Shop/Shop'
import Wallet from './Components/Wallet/Wallet'
import Partner from './Components/Partner/Partner'
import Footer from './Components/Footer/Footer'
import Gaming from './Components/Gaming/Gaming'
import Devices from './Components/Devices/Devices'

import ProtectedRoute from './Components/ProtectedRoute'
import Login from './Components/Login';
import Register from './Components/Register';

const AppContent = ({ isAuthenticated, setIsAuthenticated }) => {
  const location = useLocation();

  const hideNavbarOnRoutes = ['/login', '/register'];
  const shouldShowNavbar = !hideNavbarOnRoutes.includes(location.pathname) && isAuthenticated;

  return (
    <>
      {shouldShowNavbar && <Navbar />}

      <Routes>
        <Route 
          path="/" 
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <>
                <Hero />
                <Carsoule />
                <Aboutus />
                <Gaming />
                <Community />
                <Shop />
                <Devices />
                <Wallet />
                <Partner />
                <Footer />
              </>
            </ProtectedRoute>
          } 
        />
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
      </Routes>
    </>
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <AppContent
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
    </Router>
  );
};

export default App;
