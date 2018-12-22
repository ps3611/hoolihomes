import { combineReducers } from 'redux';
import apiReducers from './apiReducers';

export default combineReducers({
  api: apiReducers,
});