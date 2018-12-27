export const SELECT_PRICE_RANGE = '@@setting/SELECT_PRICE_RANGE';
export const SELECT_M2PRICE_RANGE = '@@setting/SELECT_M2PRICE_RANGE';
export const SELECT_SIZE_RANGE = '@@setting/SELECT_SIZE_RANGE';
export const SELECT_CITY = '@@setting/SELECT_CITY';

export const selectPriceRange = range => ({
  type: SELECT_PRICE_RANGE,
  payload: range,
});

export const selectM2PriceRange = range => ({
  type: SELECT_M2PRICE_RANGE,
  payload: range,
});

export const selectSizeRange = range => ({
  type: SELECT_SIZE_RANGE,
  payload: range,
});

export const selectCity = city => ({
  type: SELECT_CITY,
  payload: city,
});
