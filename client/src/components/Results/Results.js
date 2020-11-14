import React from 'react';
import { connect } from 'react-redux';
import JobItem from './JobItem/JobItem';


const Results = ({ jobs }) => {
  return (
    <div className="Results" style = {{width: '100%', marginTop: '4rem'}}>
      <div className="md-container">
        {jobs.map((job, idx) => (
          <JobItem key={idx} job = {job} />
        ))}
      </div>
    </div>
  )
}


const mapStateToProps = (state) => ({
  jobs: state.jobsReducer.jobs
})

export default connect(mapStateToProps)(Results)