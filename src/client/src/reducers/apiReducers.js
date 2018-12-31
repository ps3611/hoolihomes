import * as api from '../actions/apiActions';

const initialState = {
  homesList: [],
  totalPages: 0,
  totalResults: 0,
  errors: {},
}

export default (state=initialState, action) => {
  switch (action.type) {
    case api.HOMES_CITY_SUCCESS:
    case api.HOMES_FILTER_SUCCESS:
    case api.HOMES_PAGINATION_SUCCESS:
      return {
        ...state,
        homesList: action.payload.homesList,
        totalPages: action.payload.totalPages,
        totalResults: action.payload.totalResults,
        errors: {},
      };
    case api.HOMES_CITY_FAILURE:
    case api.HOMES_FILTER_FAILURE:
    case api.HOMES_PAGINATION_FAILURE:
      return {
        ...state,
        errors: action.payload.response || { non_field_errors: action.payload.statusText },
      };
    default:
      return state;
  }
};