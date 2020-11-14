import { GET_JOBS, GET_JOBS_SUCCESS, GET_JOBS_FAILURE, CLEAR_JOBS, SHOW_DETAILS, LOAD_MORE_JOBS_SUCCESS, LOAD_MORE_JOBS_FAILURE } from './jobActionTypes';

const initialState = {
  jobs: [],
  jobDetail: null,
  loading: false,
  hasErrors: false,
};

const showDetails = (jobs, id) => {
  let jobDetail =  jobs.find(item => item.id === id);
  return jobDetail;
};

const jobsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_JOBS:
      return {
        ...state,
        loading: true
      };
    case GET_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        hasErrors: false,
        jobs: payload
      };
    case LOAD_MORE_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        hasErrors: false,
        jobs: [...state.jobs, ...payload]
      }
    case GET_JOBS_FAILURE:
    case LOAD_MORE_JOBS_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: true
      };
    case CLEAR_JOBS:
      return {
        ...state,
        jobs: [],
        jobDetail: null,
        loading: false,
        hasErrors: false,
      };
    case SHOW_DETAILS:
      return {
        ...state,
        jobDetail: showDetails(state.jobs, payload)
      }
    default:
      return state;
  }
}

export default jobsReducer;