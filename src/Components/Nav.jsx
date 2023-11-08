import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import planet from '../assets/planet.png';
import '../App.css';

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo">
        <img id="planetlogo" src={planet} alt="Logo" />
      </div>
      <div className="logo">
        Space Travelers&apos; Hub
      </div>
      <ul className="nav-links">
        <li className={location.pathname === '/' ? 'active-link' : ''}>
          <Link to="/">Rockets</Link>
        </li>
        <li className={location.pathname === '/missions' ? 'active-link' : ''}>
          <Link to="/missions">Missions</Link>
        </li>
        <li><div id="ruler" /></li>
        <li className={location.pathname === '/my-profile' ? 'active-link' : ''}>
          <Link to="/my-profile">My Profile</Link>
        </li>
      </ul>
    </nav>
  );
}
