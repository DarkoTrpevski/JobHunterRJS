import React from 'react'

const LoadMore = ({ jobs, loading, loadMoreJobs }) => {
  return (
    <div className = "LoadMore">
      {jobs.length > 0 && (
        <button disabled = {loading} className = {`load-more-btn ${loading ? 'disabled' : ''}`} onClick = {loading ? null : loadMoreJobs}>
          Load More Jobs
        </button>
      )}
    </div>
  )
}

export default LoadMore
