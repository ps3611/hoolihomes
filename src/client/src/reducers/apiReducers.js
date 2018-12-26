import * as api from '../actions/apiActions';

const initialState = {
  homesList: [],
  totalPages: 0,
  queryParameters: {
		// country: 'es',
		// city: 'barcelona',
		centerLatitude: 41.385063,
		centerLongitude: 2.173404,
    price: [0,10000000],
    pricePerSquareMeter: [0,10000],
		size: [0,10000],
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
        totalPages: action.payload.totalPages,
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