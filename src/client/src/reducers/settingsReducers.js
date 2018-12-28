import * as settings from '../actions/settingsActions';
import * as api from '../actions/apiActions';

const initialState = {
  selectedCity: 'Barcelona',
  priceFilterChanged: false,
  m2PriceFilterChanged: false,
  sizeFilterChanged: false,
  minPrice: 0,
  avgPrice: 0,
  maxPrice: 1000000,
  minSize: 0,
  avgSize: 0,
  maxSize: 10000,
  minM2Price: 0,
  avgM2Price: 0,
  maxM2Price: 100000,
  queryParameters: {
    centerLatitude: 41.385063,
    centerLongitude: 2.173404,
    price: [0,10000000],
    m2Price: [0,100000],
    size: [0,10000],
    radius: 5000, // in meters
    page: 1,
  },
  errors: {},
};

export default (state = initialState, action) => {
  const newQueryParameters = state.queryParameters;
  switch (action.type) {
    case api.HOMES_LIST_SUCCESS:
      return {
        ...state,
        avgPrice: action.payload.avgPrice,
        avgSize: action.payload.avgSize,
        avgM2Price: action.payload.avgM2Price,
      };
    case settings.SELECT_PRICE_RANGE:
      newQueryParameters.price = action.payload;
      return {
        ...state,
        queryParameters: newQueryParameters,
        priceFilterChanged: true,
      };
    case settings.SELECT_M2PRICE_RANGE:
      newQueryParameters.m2Price = action.payload;
      return {
        ...state,
        queryParameters: newQueryParameters,
        m2PriceFilterChanged: true,
      };
    case settings.SELECT_SIZE_RANGE:
      newQueryParameters.size = action.payload;
      return {
        ...state,
        queryParameters: newQueryParameters,
        sizeFilterChanged: true,
      };
    case settings.SELECT_CITY:
      newQueryParameters.centerLatitude = action.payload.lat;
      newQueryParameters.centerLongitude = action.payload.lng;
      return {
        ...state,
        selectedCity: action.payload.name,
        priceFilterChanged: false,
        m2PriceFilterChanged: false,
        sizeFilterChanged: false,
        queryParameters: newQueryParameters,
      };
    default:
      return state;
  }
};
