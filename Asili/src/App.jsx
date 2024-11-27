import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar will be constant across all routes */}
      <Routes>
      <Route path="/" element={<Home />} /> 
      </Routes>
    </Router>
  );
}

export default App;
