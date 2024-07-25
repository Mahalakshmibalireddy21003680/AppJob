import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './JobApplicationForm.css';

const JobApplicationForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save data to localStorage
    const storedApplications = JSON.parse(localStorage.getItem('applications')) || {};
    storedApplications[id] = storedApplications[id] || [];
    storedApplications[id].push(formData);
    localStorage.setItem('applications', JSON.stringify(storedApplications));

    navigate('/'); // Navigate to home page after submission
  };

  return (
    <div className="application-form">
      <h1>Apply for {id.replace('-', ' ')}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Resume:
          <textarea name="resume" placeholder='Submit Drive Link Here' value={formData.resume} onChange={handleChange} required />
        </label>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
