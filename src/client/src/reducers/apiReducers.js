import * as api from '../actions/apiActions';

const initialState = {
  homesList: [],
  totalPages: 0,
  queryParameters: {
		country: 'es',
		city: 'barcelona',
		centerLatitude: 41.385063,
		centerLongitude: 2.173404,
		radius: 50000,
    page: 1,
	},
  errors: {},
}

export default (state=initialState, action) => {
  switch (action.type) {
    case api.HOMES_LIST_SUCCESS:
      return {
        ...state,
        homesList: action.payload.homesList,
        errors: {},
      };
    case api.HOMES_LIST_FAILURE:
      return {
        ...state,
        errors: action.payload.response || { non_field_errors: action.payload.statusText },
      };
    default:
      return state;
  }
};