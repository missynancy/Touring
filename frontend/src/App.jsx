import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DestinationPage from './pages/destination/DestinationPage';


function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar will be constant across all routes */}
      <Routes>
        {/* Route to Home */}
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<DestinationPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
