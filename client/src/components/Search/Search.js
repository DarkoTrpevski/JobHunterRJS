import React, { useState } from "react";
import { connect } from 'react-redux';
import { clearJobs, fetchJobs } from '../../redux/jobs/jobsActions';
import './Search.scss';


const Search = ({ clearJobs, fetchJobs }) => {

  const[description, setDescription] = useState('');
  const[location, SetLocation] = useState('');
  const[full_time, SetFull_Time] = useState(false);


  const handleSubmit = (e) => {
    {/* GIT STATUS + GIT COMMIT & ADDING/COMMITING EVERY DAY */}

    {/* GIT STATUS + GIT COMMIT & ADDING/COMMITING EVERY DAY */}

    {/* GIT STATUS + GIT COMMIT & ADDING/COMMITING EVERY DAY */}
    e.preventDefault();
    clearJobs();
    // console.log(description, location, full_time);
    fetchJobs(description, location, full_time);
  };

  const handleClear = (e) => {
    {/* GIT STATUS + GIT COMMIT & ADDING/COMMITING EVERY DAY */}

    {/* GIT STATUS + GIT COMMIT & ADDING/COMMITING EVERY DAY */}
    
    {/* GIT STATUS + GIT COMMIT & ADDING/COMMITING EVERY DAY */}
    // clearJobs();
    // fetchJobs();
  };

  const isQueryPresent = () => {
    return description || location || full_time;
  };


  return (
    <div className = "Search">
      <div className="sm-container">
        <form className = "search-form" onSubmit={handleSubmit}>
          <div className="form-top-row">
            <div className="top-row-text-inputs">
              <input className = "search-input" type="text" onChange = {(e) => setDescription(e.target.value)} value = {description} placeholder = "eg. React Developer" name = "description" />
              <input className = "search-input" type="text" onChange = {(e) => SetLocation(e.target.value)} value = {location} placeholder = "eg. San Francisco" name = "location" />
              <div className="form-fulltime">
                <input type = "checkbox" onChange={(e) => SetFull_Time(!full_time)} checked={full_time}/>
                <label>Full Time</label>
              </div>
            </div>
          </div>
          <div className="form-bottom-row">
            <button type="submit">Search</button>
            <button onClick={handleClear} disabled={!isQueryPresent()}>Clear</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default connect(null, { clearJobs, fetchJobs })(Search);