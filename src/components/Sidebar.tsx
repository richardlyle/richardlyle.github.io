import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <button className="toggle-button" onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? '▶' : '◀'}
      </button>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/biography">Biography</Link>
        <Link to="/interests">Interests</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
