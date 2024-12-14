import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar_module.css';

function Sidebar() {
  const [userManagementOpen, setUserManagementOpen] = useState(false);
  const [courseManagementOpen, setCourseManagementOpen] = useState(false);
  const [contentManagementOpen, setContentManagementOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('analytics');

  const toggleUserManagement = () => {
    setUserManagementOpen(!userManagementOpen);
  };

  const toggleCourseManagement = () => {
    setCourseManagementOpen(!courseManagementOpen);
  };

  const toggleContentManagement = () => {
    setContentManagementOpen(!contentManagementOpen);
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <Link
          to="/analytics"
          className={`sidebar-item-title ${activeLink === 'analytics' ? 'active-link' : ''}`}
          onClick={() => handleLinkClick('analytics')}
        >
          Analytics
        </Link>
      </div>
      <div className="sidebar-item">
        <div onClick={toggleUserManagement} className="sidebar-item-title">
          User Management
          <i className={`fas ${userManagementOpen ? 'fa-chevron-up' : 'fa-chevron-down'} chevron-icon`}></i>
        </div>
        {userManagementOpen && (
          <div className="sidebar-dropdown">
            <Link
              to="/user-details"
              className={`sidebar-link ${activeLink === 'user-details' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('user-details')}
            >
              User Details
            </Link>
            <Link
              to="/tutor-details"
              className={`sidebar-link ${activeLink === 'tutor-details' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('tutor-details')}
            >
              Tutor Details
            </Link>
          </div>
        )}
      </div>
      <div className="sidebar-item">
        <div onClick={toggleCourseManagement} className="sidebar-item-title">
          Course Management
          <i className={`fas ${courseManagementOpen ? 'fa-chevron-up' : 'fa-chevron-down'} chevron-icon`}></i>
        </div>
        {courseManagementOpen && (
          <div className="sidebar-dropdown">
            <Link
              to="/course-details"
              className={`sidebar-link ${activeLink === 'course-details' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('course-details')}
            >
              Course Details
            </Link>
          </div>
        )}
      </div>
      <div className="sidebar-item">
        <div onClick={toggleContentManagement} className="sidebar-item-title">
          Content Management
          <i className={`fas ${contentManagementOpen ? 'fa-chevron-up' : 'fa-chevron-down'} chevron-icon`}></i>
        </div>
        {contentManagementOpen && (
          <div className="sidebar-dropdown">
            <Link
              to="/video-contents"
              className={`sidebar-link ${activeLink === 'video-contents' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('video-contents')}
            >
              Documents
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
