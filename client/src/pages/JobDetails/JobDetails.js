import React, { useEffect } from 'react';
import moment from 'moment';
import { showDetails } from '../../redux/jobs/jobsActions';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';


const JobDetails = ({ jobDetail, showDetails, match: { params: { id } } }) => {

  useEffect(() => {
    showDetails(id);
    console.log(jobDetail);
    //eslint-disable-next-line
  }, [jobDetail, id])

  if(jobDetail === null) return <Spinner />

  let date = jobDetail && +new Date(jobDetail.created_at);

  const jobDetailsContainer = (
    <div className="job-details-wrapper">
      <h2>{jobDetail.title}</h2>
    </div>
  )


  return (
    <div className = "JobDetails">
      {jobDetail && (jobDetailsContainer)}
    </div>
  )
}

const mapStateToProps = (state) => ({
  jobDetail: state.jobsReducer.jobDetail
})

export default connect(mapStateToProps, { showDetails })(JobDetails);