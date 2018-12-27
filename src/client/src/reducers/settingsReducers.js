import * as settings from '../actions/settingsActions';

const initialState = {
  queryParameters: {
    centerLatitude: 41.385063,
    centerLongitude: 2.173404,
    price: [0,10000000],
    pricePerSquareMeter: [0,20000],
    size: [0,500],
    radius: 10000, // in meters
    page: 1,
  },
  errors: {},
};

export default (state = initialState, action) => {
  const newQueryParameters = state.queryParameters;
  switch (action.type) {
    case settings.SELECT_PRICE_RANGE:
      newQueryParameters.price = action.payload;
      return {
        ...state,
        queryParameters: newQueryParameters,
      };
    case settings.SELECT_M2PRICE_RANGE:
      newQueryParameters.pricePerSquareMeter = action.payload;
      return {
        ...state,
        queryParameters: newQueryParameters,
      };
    case settings.SELECT_SIZE_RANGE:
      newQueryParameters.size = action.payload;
      return {
        ...state,
        queryParameters: newQueryParameters,
      };
    default:
      return state;
  }
};
