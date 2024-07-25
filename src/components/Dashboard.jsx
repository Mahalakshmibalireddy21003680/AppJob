import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Fetch all applications from localStorage
    const storedApplications = JSON.parse(localStorage.getItem('applications')) || {};
    const allApplications = Object.keys(storedApplications).flatMap(jobId =>
      storedApplications[jobId].map(application => ({
        ...application,
        jobTitle: jobId.replace('-', ' ')
      }))
    );
    setApplications(allApplications);
  }, []);

  return (
    <div className="dashboard">
      <h1>My Applications</h1>
      <div className="application-list">
        {applications.map((application, index) => (
          <div key={index} className="application-item">
            <h3>{application.jobTitle}</h3>
            <p>Name: {application.name}</p>
            <p>Email: {application.email}</p>
            <p>Resume: {application.resume}</p>
            <button>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
