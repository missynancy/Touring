import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar will be constant across all routes */}
      <Routes>
      </Routes>
    </Router>
  );
}

export default App;
