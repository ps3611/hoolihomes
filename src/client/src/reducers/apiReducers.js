import * as api from '../actions/apiActions';

const initialState = {
  homesList: [],
  totalPages: 0,
  totalResults: 0,
  errors: {},
}

export default (state=initialState, action) => {
  switch (action.type) {
    case api.HOMES_LIST_SUCCESS:
    case api.INIT_HOMES_LIST_SUCCESS:
      return {
        ...state,
        homesList: action.payload.homesList,
        totalPages: action.payload.totalPages,
        totalResults: action.payload.totalResults,
        errors: {},
      };
    case api.HOMES_LIST_FAILURE:
    case api.INIT_HOMES_LIST_FAILURE:
      return {
        ...state,
        errors: action.payload.response || { non_field_errors: action.payload.statusText },
      };
    default:
      return state;
  }
};