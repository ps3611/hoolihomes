import * as settings from '../actions/settingsActions';

const initialState = {
  queryParameters: {
    centerLatitude: 41.385063,
    centerLongitude: 2.173404,
    price: [0,10000000],
    pricePerSquareMeter: [0,10000],
    size: [0,2000],
    radius: 50000,
    page: 1,
  },
  errors: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case settings.SELECT_PRICE_RANGE:
      return {
        ...state,
      };
    case settings.SELECT_M2PRICE_RANGE:
      return {
        ...state,
      };
    case settings.SELECT_SIZE_RANGE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
