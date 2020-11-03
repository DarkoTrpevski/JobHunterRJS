import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';

const initialState = {};

const middlewares = [thunkMiddleware]
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer]
const composedEnhancers = composeWithDevTools(...enhancers);


export const store = createStore(rootReducer, initialState, composedEnhancers);
export default store;