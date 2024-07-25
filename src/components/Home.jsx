import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';
import './Home.css';

const Home = () => {
  const jobs = [
    { id: 'data-entry', title: 'Data Entry', description: 'Enter data accurately and efficiently.' },
    { id: 'logo-creation', title: 'Logo Creation', description: 'Design creative logos for clients.' },
    { id: 'full-stack-development', title: 'Full Stack Development', description: 'Build and maintain web applications.' }
  ];

  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Fetch applications from localStorage
    const storedApplications = JSON.parse(localStorage.getItem('applications')) || {};
    const allApplications = Object.keys(storedApplications).flatMap(jobId =>
      storedApplications[jobId].map(application => ({
        ...application,
        jobId,
        jobTitle: jobId.replace('-', ' ')
      }))
    );
    setApplications(allApplications);
  }, []);

  return (
    <div className="home">
      <h1>Job Listings</h1>
      <div className="job-listings">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      <h2>My Applications</h2>
      <div className="application-list">
        {applications.length === 0 ? (
          <p>No applications yet.</p>
        ) : (
          applications.map((application, index) => (
            <div key={index} className="application-item">
              <h3>Applied for: {application.jobTitle}</h3>
              <p><strong>Name:</strong> {application.name}</p>
              <p><strong>Email:</strong> {application.email}</p>
              <p><strong>Resume:</strong> {application.resume}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
