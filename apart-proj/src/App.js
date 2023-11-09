import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './components/About';
import Listings from './components/Listings';
import './App.css'; // Create or import your main CSS file
import Reviews from './components/Reviews';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <Link to="/">
            <img className="PClogo" src="https://projectcodeuiuc.org/project-code.svg" alt=""/>
          </Link>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/listings" className="nav-link">Listings</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/" element={<div>Home Page Content</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;