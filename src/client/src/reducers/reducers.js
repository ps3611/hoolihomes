import { combineReducers } from 'redux';
import apiReducers from './apiReducers';
import settingsReducers from './settingsReducers';
import listViewPageReducers from './page/listViewPageReducers';

export default combineReducers({
  api: apiReducers,
  settings: settingsReducers,
  listViewPage: listViewPageReducers,
});