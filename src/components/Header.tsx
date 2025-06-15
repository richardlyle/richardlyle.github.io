import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">Richard Lyle</div>
      <div className="logo-section">
        <img src="/images/profile.jpg" alt="Profile" className="profile-pic" />
      </div>
      <nav>
        <ul>
          <li className="dropdown">
            <a href="#">Contact</a>
            <ul className="dropdown-menu">
              <li><a href="mailto:rjlyle@bu.edu">Email</a></li>
              <li><a href="tel:+12182131393">(218) 213-1393</a></li>
            </ul>
          </li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;