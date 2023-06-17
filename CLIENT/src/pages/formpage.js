import React, { useState } from 'react';

function StaffingSystem() {
  const [fullName, setFullName] = useState('');
  const [resume, setResume] = useState('');
  const [technology, setTechnology] = useState([]);

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleResumeChange = (event) => {
    setResume(event.target.value);
  };

  const handleTechnologyChange = (event) => {
   setTechnology(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Display resource details
    console.log('Full Name:', fullName);
    console.log('Resume:', resume);
    console.log('Resume:', technology);

    // Reset form
    setFullName('');
    setResume('');
    setTechnology();
  };

  return (
    <div>
      <h1>Staffing System</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={handleFullNameChange}
          required
        />
        <br />
        <label htmlFor="resume">Upload Resume:</label>
        <input
          type="file"
          id="resume"
          value={resume}
          onChange={handleResumeChange}
          required
        />
        <br />
        <label htmlFor="technology">Technology:</label>
        <select
          id="technology"
          value={technology}
          onChange={handleTechnologyChange}
          required
        >
          <option value="">Select a technology</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
          <option value="JavaScript">JavaScript</option>
          <option value="C#">C#</option>
        </select>        
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

module.exports = StaffingSystem
