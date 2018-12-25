import * as api from '../actions/apiActions';

const initialState = {
  homesList: [],
  pagesLoaded: 0,
  latitude: 41.385063,
  longitude: 2.173404,
  errors: {},
}

export default (state=initialState, action) => {
  switch (action.type) {
    case api.HOMES_LIST_SUCCESS:
      return {
        ...state,
        homesList: [...state.homesList, ...action.payload.homesList],
        pagesLoaded: state.pagesLoaded + 1,
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