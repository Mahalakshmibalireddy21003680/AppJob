import React from 'react';
import { Link } from 'react-router-dom';
import './JobCard.css';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h2>{job.title}</h2>
      <p>{job.description}</p>
      <Link to={`/apply/${job.id}`} className="apply-button">
        Apply
      </Link>
    </div>
  );
};

export default JobCard;
