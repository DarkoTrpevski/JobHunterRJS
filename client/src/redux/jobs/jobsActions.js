import { GET_JOBS, GET_JOBS_SUCCESS, GET_JOBS_FAILURE, CLEAR_JOBS, SHOW_DETAILS, LOAD_MORE_JOBS_SUCCESS, LOAD_MORE_JOBS_FAILURE } from './jobActionTypes';

const allowCors = 'https://cors-anywhere.herokuapp.com';
const baseUrl = 'https://jobs.github.com/positions.json';

export const clearJobs = () => (dispatch) => {
  try {
    dispatch({
      type: CLEAR_JOBS
    })
  } catch (err) {
    console.log(err.message);
  }
};

export const fetchJobs = (description = '', location = '', full_time = '', page = 1) => async(dispatch) => {
  const URL = `${allowCors}/${baseUrl}?description=${description}&location=${location}&full_time=${full_time ? 'on' : ''}&page=${page}`;
  console.log('Inside jobsActions fetchJobs, URL is: ', URL);
  dispatch({ type: GET_JOBS });

  try {
    const res = await fetch(URL, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
    const data = await res.json();

    dispatch({ type: GET_JOBS_SUCCESS, payload: data });
  } catch (err) {
    console.log(err.message);
    dispatch({ type: GET_JOBS_FAILURE });
  }
}
export const fetchMoreJobs = (description = '', location = '', full_time = '', page = 1) => async(dispatch) => {
  const URL = `${allowCors}/${baseUrl}?description=${description}&location=${location}&full_time=${full_time ? 'on' : ''}&page=${page}`;
  console.log('Inside jobsActions fetchMoreJobs, URL is: ', URL);
  dispatch({ type: GET_JOBS });

  try {
    const res = await fetch(URL, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
    const data = await res.json();

    dispatch({ type: LOAD_MORE_JOBS_SUCCESS, payload: data });
  } catch (err) {
    console.log(err.message);
    dispatch({ type: LOAD_MORE_JOBS_FAILURE });
  }
}

export const showDetails = (id) => (dispatch) => {
  try {
    console.log('Inside jobsActions showDetails, id is:', id);
    dispatch({
      type: SHOW_DETAILS,
      payload: id
    });
  } catch (err) {
    console.error(err);
    console.log(err.message);
  }
};