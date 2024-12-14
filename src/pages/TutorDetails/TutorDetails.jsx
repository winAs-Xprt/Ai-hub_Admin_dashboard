import React, { useState } from "react";
import "./TutorDetails.css";

const TutorDetails = () => {
  const [showForm, setShowForm] = useState(false); // State to show/hide the popup form
  const [newTutor, setNewTutor] = useState({
    name: "",
    email: "",
    mobile: "",
    college: "",
    status: "Pending",
    submissionDate: new Date().toLocaleDateString("en-GB"),
  });
  const [tutors, setTutors] = useState([
   
      {
        profile: "https://via.placeholder.com/40",
        userId: "11223344",
        name: "Aarav",
        email: "aarav@example.com",
        mobile: "9876543210",
        college: "IIT Delhi",
        status: "Pending",
        submissionDate: "07.10.2024",
      },
      {
        profile: "https://via.placeholder.com/40",
        userId: "55667788",
        name: "Meera",
        email: "meera@example.com",
        mobile: "9876501234",
        college: "NIT Trichy",
        status: "Approved",
        submissionDate: "08.10.2024",
      },
      {
        profile: "https://via.placeholder.com/40",
        userId: "22334455",
        name: "Karthik",
        email: "karthik@example.com",
        mobile: "9988776655",
        college: "SRM University",
        status: "Rejected",
        submissionDate: "06.10.2024",
      },
      {
        profile: "https://via.placeholder.com/40",
        userId: "88990011",
        name: "Sanya",
        email: "sanya@example.com",
        mobile: "9123456780",
        college: "BITS Pilani",
        status: "Approved",
        submissionDate: "05.10.2024",
      },
      {
        profile: "https://via.placeholder.com/40",
        userId: "33445566",
        name: "Varun",
        email: "varun@example.com",
        mobile: "9876432100",
        college: "Anna University",
        status: "Pending",
        submissionDate: "04.10.2024",
      },
      {
        profile: "https://via.placeholder.com/40",
        userId: "44556677",
        name: "Neha",
        email: "neha@example.com",
        mobile: "9567891234",
        college: "VIT Chennai",
        status: "Approved",
        submissionDate: "03.10.2024",
      },
      {
        profile: "https://via.placeholder.com/40",
        userId: "66778899",
        name: "Rohit",
        email: "rohit@example.com",
        mobile: "9008765432",
        college: "IIT Kanpur",
        status: "Rejected",
        submissionDate: "02.10.2024",
      },
      {
        profile: "https://via.placeholder.com/40",
        userId: "77889900",
        name: "Ananya",
        email: "ananya@example.com",
        mobile: "9123567890",
        college: "Amrita University",
        status: "Approved",
        submissionDate: "01.10.2024",
      },
      {
        profile: "https://via.placeholder.com/40",
        userId: "99001122",
        name: "Vikas",
        email: "vikas@example.com",
        mobile: "9012345678",
        college: "IIT Bombay",
        status: "Pending",
        submissionDate: "30.09.2024",
      },
      {
        profile: "https://via.placeholder.com/40",
        userId: "11002233",
        name: "Priya",
        email: "priya@example.com",
        mobile: "9876509876",
        college: "Manipal University",
        status: "Approved",
        submissionDate: "29.09.2024",
      },
    
  ]);

  // Function to handle popup form visibility
  const toggleForm = () => setShowForm(!showForm);

  // Function to handle form input changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewTutor({ ...newTutor, [name]: value });
  };

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const updatedTutors = [
      {
        ...newTutor,
        userId: (Math.random() * 10000000).toFixed(0), // Generate random userId
        profile: "https://via.placeholder.com/40",
      },
      ...tutors,
    ];
    setTutors(updatedTutors);
    setShowForm(false); // Close the form after submission
    setNewTutor({
      name: "",
      email: "",
      mobile: "",
      college: "",
      status: "Pending",
      submissionDate: new Date().toLocaleDateString("en-GB"),
    });
  };

  return (
    <div className="dashboard-container">
      <div className="content-container">
        <div className="Tutor-details-container">
          {/* Header Section */}
          <h1 className="header">Tutor Details</h1>
        
          {/* Filter Section */}
          <div className="filter-section">
            <button className="filter-button green-button">Filter By</button>
            <select>
              <option>Date</option>
              <option>Name</option>
            </select>
            <select>
              <option>Order Type</option>
              <option>Ascending</option>
              <option>Descending</option>
            </select>
            <select>
              <option>Order Status</option>
              <option>Approved</option>
              <option>Pending</option>
              <option>Rejected</option>
            </select>
            <button className="reset-filter blue-button">Reset Filter</button>
            <button className="add-tutor-button" onClick={toggleForm}>
              Add New Tutor
            </button>
          </div>

          {/* Applications Table */}
          <div className="applications">
            <h3 className="Application">Applications</h3>
            <table>
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
                {tutors.map((tutor, index) => (
                  <tr key={index}>
                    <td>
                      <img src={tutor.profile} alt="Profile" />
                    </td>
                    <td>{tutor.userId}</td>
                    <td>{tutor.name}</td>
                    <td>{tutor.email}</td>
                    <td>{tutor.mobile}</td>
                    <td>{tutor.college}</td>
                    <td>{tutor.status}</td>
                    <td>{tutor.submissionDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add Tutor Form Popup */}
          {showForm && (
            <div className="popup-overlay">
              <div className="popup">
                <button className="close-button" onClick={toggleForm}>
                  X
                </button>
                <h2>Add New Tutor</h2>
                <form onSubmit={handleFormSubmit}>
                  <label>
                    Name:
                    <input
                      type="text"
                      name="name"
                      value={newTutor.name}
                      onChange={handleFormChange}
                      required
                    />
                  </label>
                  <label>
                    Email:
                    <input
                      type="email"
                      name="email"
                      value={newTutor.email}
                      onChange={handleFormChange}
                      required
                    />
                  </label>
                  <label>
                    Mobile:
                    <input
                      type="tel"
                      name="mobile"
                      value={newTutor.mobile}
                      onChange={handleFormChange}
                      required
                    />
                  </label>
                  <label>
                    College:
                    <input
                      type="text"
                      name="college"
                      value={newTutor.college}
                      onChange={handleFormChange}
                      required
                    />
                  </label>
                  <button type="submit" className="submit-button">
                    Add Tutor
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TutorDetails;
