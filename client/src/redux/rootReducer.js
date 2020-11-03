import { combineReducers } from 'redux';
import jobsReducer from './jobs/jobsReducer';


const rootReducer = combineReducers({
  jobsReducer: jobsReducer
});

export default rootReducer;