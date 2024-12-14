import React from 'react';
import { FaFileAlt } from 'react-icons/fa';

function ApplicationsTable({ applications }) {
  return (
    <div className="applications-section">
      <div className="applications-header">
        <FaFileAlt className="applications-icon" />
        <h2>Applications</h2>
      </div>
      
      <div className="table-container">
        <table className="applications-table">
          <thead>
            <tr>
              <th>Profile</th>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>College</th>
              <th>Status</th>
              <th>Date of Submission</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={index}>
                <td>
                  <img src={app.profileImage} alt={app.name} className="profile-image" />
                </td>
                <td>{app.userId}</td>
                <td>{app.name}</td>
                <td>{app.email}</td>
                <td>{app.mobile}</td>
                <td>{app.college}</td>
                <td>
                  <span className={`status-badge ${app.status.toLowerCase()}`}>
                    {app.status}
                  </span>
                </td>
                <td>{app.dateSubmitted}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ApplicationsTable;