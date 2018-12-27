export const SELECT_PRICE_RANGE = '@@setting/SELECT_PRICE_RANGE';
export const SELECT_M2PRICE_RANGE = '@@setting/SELECT_M2PRICE_RANGE';
export const SELECT_SIZE_RANGE = '@@setting/SELECT_SIZE_RANGE';

export const selectPriceRange = view => ({
  type: SELECT_PRICE_RANGE,
  payload: view,
});

export const selectM2PriceRange = view => ({
  type: SELECT_M2PRICE_RANGE,
  payload: view,
});

export const selectSizeRange = view => ({
  type: SELECT_SIZE_RANGE,
  payload: view,
});
