import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import './JobItem.scss';

const JobItem = ({ job }) => {

  let date = job && +new Date(job.created_at);
  
  return (
    <div className="JobItem">
      <Link to={job && `/details/${job.id}`}>
      <header className = "jobitem-header">
        <h2>
          {job && job.title}
        </h2>
        <span>
          {date && (moment(date).startOf("hour").fromNow())}
        </span>
      </header>
      <footer className = "jobitem-footer">
        <div className = "footer-job-info">
          <h4>{job.company}<span>—</span><span className = "info-job-type">{job.type}</span> </h4>
        </div>
        <div>
          <span>
            {job && job.location}
          </span>
        </div>
      </footer>
    </Link>
    </div>
  );
}
export default JobItem;