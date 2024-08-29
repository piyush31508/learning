import React from 'react';
import './ScholarshipDashboard.css'; // Import the external CSS file
import { useNavigate } from 'react-router-dom';

const ScholarshipDashboard = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate('/Apply');
  };

  return (
    <div className="scholarship-dashboard w-[96rem]">
      {/* Header Section */}
      <div className="header">
        <h1>Welcome to the Scholarship Dashboard</h1>
      </div>

      {/* Apply Button Section */}
      <div className="section">
        <button className="button"
         onClick={handleApplyClick}
         style={{ width: 'fit-content' }}>
          Apply for Scholarship
        </button>
      </div>

      {/* Status Button Section */}
      <div className="section">
        <button 
         className="button"
         style={{ width: 'fit-content' }}>
          Check Application Status
        </button>
      </div>
    </div>
  );
};

export default ScholarshipDashboard;

