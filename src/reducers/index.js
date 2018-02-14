import { combineReducers } from 'redux';
import GetReducer from './reducer_getRequest';

const rootReducer = combineReducers({
  get: GetReducer
});

export default rootReducer;
