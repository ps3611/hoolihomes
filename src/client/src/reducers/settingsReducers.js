import * as settings from '../actions/settingsActions';
import * as api from '../actions/apiActions';

const initialState = {
  selectedCity: 'Barcelona',
  priceFilterActive: false,
  m2PriceFilterActive: false,
  sizeFilterActive: false,
  minPrice: 0,
  avgPrice: 0,
  maxPrice: 100000,
  minSize: 0,
  avgSize: 0,
  maxSize: 1000,
  minM2Price: 0,
  avgM2Price: 0,
  maxM2Price: 10000,
  queryParameters: {
    centerLatitude: 41.385063,
    centerLongitude: 2.173404,
    radius: 5000, // in meters
    price: [0,10000000],
    size: [0,10000],
    m2Price: [0,100000],
    page: 1,
  },
  errors: {},
};

export default (state = initialState, action) => {
  const newQueryParameters = state.queryParameters;
  switch (action.type) {
    case api.HOMES_FILTER_SUCCESS:
      return {
        ...state,
        avgPrice: action.payload.avgPrice,
        avgSize: action.payload.avgSize,
        avgM2Price: action.payload.avgM2Price,
      };
    case api.HOMES_CITY_SUCCESS:
      return {
        ...state,
        minPrice: action.payload.minPrice,
        avgPrice: action.payload.avgPrice,
        maxPrice: action.payload.maxPrice,
        minSize: action.payload.minSize,
        avgSize: action.payload.avgSize,
        maxSize: action.payload.maxSize,
        minM2Price: action.payload.minM2Price,
        avgM2Price: action.payload.avgM2Price,
        maxM2Price: action.payload.maxM2Price,
      };
    case settings.SELECT_PRICE_RANGE:
      newQueryParameters.price = action.payload;
      return {
        ...state,
        queryParameters: newQueryParameters,
        priceFilterActive: state.minPrice !== state.queryParameters.price[0] || state.maxPrice !== state.queryParameters.price[1],
      };
    case settings.SELECT_SIZE_RANGE:
      newQueryParameters.size = action.payload;
      return {
        ...state,
        queryParameters: newQueryParameters,
        sizeFilterActive: state.minSize !== state.queryParameters.size[0] || state.maxSize !== state.queryParameters.size[1],
      };
    case settings.SELECT_M2PRICE_RANGE:
      newQueryParameters.m2Price = action.payload;
      return {
        ...state,
        queryParameters: newQueryParameters,
        m2PriceFilterActive: state.minM2Price !== state.queryParameters.m2Price[0] || state.maxM2Price !== state.queryParameters.m2Price[1],
      };
    case settings.SELECT_CITY:
      newQueryParameters.centerLatitude = action.payload.lat;
      newQueryParameters.centerLongitude = action.payload.lng;
      return {
        ...state,
        selectedCity: action.payload.name,
        priceFilterActive: false,
        m2PriceFilterActive: false,
        sizeFilterActive: false,
        queryParameters: newQueryParameters,
      };
    case settings.RESET_FILTERS:
      newQueryParameters.price = [state.minPrice, state.maxPrice];
      newQueryParameters.size = [state.minSize, state.maxSize];
      newQueryParameters.m2Price = [state.minM2Price, state.maxM2Price];
      return {
        ...state,
        priceFilterActive: false,
        m2PriceFilterActive: false,
        sizeFilterActive: false,
        queryParameters: newQueryParameters,
      };
    default:
      return state;
  }
};
