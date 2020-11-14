import React, { useState } from "react";
import { connect } from 'react-redux';
import { clearJobs, fetchJobs, fetchMoreJobs } from '../../redux/jobs/jobsActions';
import LoadMore from '../LoadMore/LoadMore';
import Search from '../Search/Search';
import './SearchContainer.scss';

const SearchContainer = ({ children, jobs, loading, clearJobs, fetchJobs, fetchMoreJobs }) => {

  const[desc, setDesc] = useState('');
  const[loc, setLoc] = useState('');
  const[full, setFull] = useState(false);
  const[pageNum, setPageNum] = useState(1);

  const loadMoreJobs = () => {
    setPageNum(pageNum + 1);
    fetchMoreJobs(desc, loc, full, pageNum);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit in SearchContainer clicked');
    clearJobs();
    fetchJobs(desc, loc, full);
  }

  const handleClear = (e) => {
    e.preventDefault();
    console.log('Clear clicked!!');
    clearJobs();
    resetState();
  }

  const resetState = () => {
    setDesc('');
    setLoc('');
    setFull(false);
    setPageNum(1);
  }

  return (
    <div className = "SearchContainer">
      <Search desc = {desc} setDesc = {setDesc} loc = {loc} setLoc = {setLoc} full = {full} setFull = {setFull} handleSubmit = {handleSubmit} handleClear = {handleClear} />
      {children}
      <LoadMore jobs = {jobs} loading = {loading} loadMoreJobs = {loadMoreJobs} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  jobs: state.jobsReducer.jobs,
  loading: state.jobsReducer.loading
})

export default connect(mapStateToProps, { clearJobs, fetchJobs, fetchMoreJobs })(SearchContainer);