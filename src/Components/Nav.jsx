import React from 'react';
import { Link } from 'react-router-dom';
import planet from '../assets/planet.png';
import '../App.css';

export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img id="planetlogo" src={planet} alt="Logo" />
      </div>
      <div className="logo">
        Space Travelers&apos; Hub
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Rockets</Link>
        </li>
        <li>
          <Link to="/missions">Missions</Link>
        </li>
        <li>
          <Link to="/my-profile">My Profile</Link>
        </li>
      </ul>
    </nav>
  );
}
