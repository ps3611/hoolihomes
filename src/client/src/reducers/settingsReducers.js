import * as settings from '../actions/settingsActions';
import * as api from '../actions/apiActions';

const initialState = {
  selectedCity: 'Barcelona',
  priceFilterChanged: false,
  m2PriceFilterChanged: false,
  sizeFilterChanged: false,
  minPrice: 0,
  avgPrice: 0,
  maxPrice: 0,
  minSize: 0,
  avgSize: 0,
  maxSize: 0,
  minM2Price: 0,
  avgM2Price: 0,
  maxM2Price: 0,
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
        queryParameters: newQueryParameters,
      };
    case api.CITY_INFO_SUCCESS:
      return {
        ...state,
        minPrice: action.payload.minPrice,
        maxPrice: action.payload.maxPrice,
        minSize: action.payload.minSize,
        maxSize: action.payload.maxSize,
        minM2Price: action.payload.minM2Price,
        maxM2Price: action.payload.maxM2Price,
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
        queryParameters: newQueryParameters,
      };
    default:
      return state;
  }
};
