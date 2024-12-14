import React from 'react';
import './navbar_module.css';

import logoImage from '../../assets/aiconceptshub_logo.jpg';
import profileIcon from '../../assets/profile_icon.webp';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        {/* Left Section */}
        <div className="navbar-left">
          <div className="logo">
            <img src={logoImage} alt="Logo" className="logo-img" />
            <span className="logo-name">Admin Dashboard</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="navbar-right">
          {/* Search Bar */}
          <div className="search-area">
            <i className="fa fa-search search-icon"></i>
            <input type="text" placeholder="Search..." className="search-input" />
          </div>

          {/* Notification Bell */}
          <div className="notification-icon">
            <i className="fa fa-bell bell-icon"></i>
            <span className="alert-dot"></span>
          </div>

          {/* Profile Photo */}
          <div className="profile-icon">
            <img src={profileIcon} alt="Profile" className="profile-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
