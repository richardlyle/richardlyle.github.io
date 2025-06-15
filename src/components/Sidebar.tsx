// src/components/Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // If you're using CSS modules, import the module instead

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Navigation</h2>
      <nav className="sidebar-nav">
        <Link to="/biography" className="nav-link">Biography</Link>
        <Link to="/interests" className="nav-link">Interests</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/resume" className="nav-link">Resume</Link>
        <Link to="/gallery" className="nav-link">Gallery</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
