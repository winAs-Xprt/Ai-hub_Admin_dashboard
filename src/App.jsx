import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Sidebar from './components/Sidebar/sidebar';
import CourseDetails from './pages/CourseDetails/CourseDetails';
import UserDetails from './pages/UserDetails/UserDetails';
import TutorDetails from './pages/TutorDetails/TutorDetails';
import VideoContents from './pages/ContentManagement/VideoContents/VideoContents';
import Analytics from './pages/Analytics/Analytics';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Sidebar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Navigate to="/analytics" replace />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/course-details" element={<CourseDetails />} />
            <Route path="/user-details" element={<UserDetails />} />
            <Route path="/tutor-details" element={<TutorDetails />} />
            <Route path="/video-contents" element={<VideoContents />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;