import { combineReducers } from 'redux';
import apiReducers from './apiReducers';
import listViewPageReducers from './page/listViewPageReducers';

export default combineReducers({
  api: apiReducers,
  listViewPage: listViewPageReducers,
});