import React from 'react';
import { connect } from 'react-redux';
import JobItem from './JobItem/JobItem';


const Results = ({ jobs }) => {
  return (
    <div className="Results" style = {{marginTop: '4rem'}}>
      <div className="md-container">
        {jobs.map((job, idx) => (
          <JobItem key={job.id} job = {job} />
        ))}
      </div>
    </div>
  )
}


const mapStateToProps = (state) => ({
  jobs: state.jobsReducer.jobs
})

export default connect(mapStateToProps)(Results)