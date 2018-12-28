import * as api from '../actions/apiActions';

const initialState = {
  homesList: [],
  totalPages: 0,
  minPrice: 0,
  avgPrice: 0,
  maxPrice: 0,
  minSize: 0,
  avgSize: 0,
  maxSize: 0,
  minM2Price: 0,
  avgM2Price: 0,
  maxM2Price: 0,
  errors: {},
}

export default (state=initialState, action) => {
  switch (action.type) {
    case api.HOMES_LIST_SUCCESS:
      return {
        ...state,
        homesList: action.payload.homesList,
        totalPages: action.payload.totalPages,
        minPrice: action.payload.minPrice,
        avgPrice: action.payload.avgPrice,
        maxPrice: action.payload.maxPrice,
        minSize: action.payload.minSize,
        avgSize: action.payload.avgSize,
        maxSize: action.payload.maxSize,
        minM2Price: action.payload.minM2Price,
        avgM2Price: action.payload.avgM2Price,
        maxM2Price: action.payload.maxM2Price,
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