import { RSAA } from 'redux-api-middleware';
import qs from 'qs';

const SERVER_ENDPOINT = 'http://127.0.0.1:3001';

export const HOMES_CITY_REQUEST = '@@api/HOMES_CITY_REQUEST';
export const HOMES_CITY_SUCCESS = '@@api/HOMES_CITY_SUCCESS';
export const HOMES_CITY_FAILURE = '@@api/HOMES_CITY_FAILURE';

export const HOMES_FILTER_REQUEST = '@@api/HOMES_FILTER_REQUEST';
export const HOMES_FILTER_SUCCESS = '@@api/HOMES_FILTER_SUCCESS';
export const HOMES_FILTER_FAILURE = '@@api/HOMES_FILTER_FAILURE';

export const HOMES_PAGINATION_REQUEST = '@@api/HOMES_PAGINATION_REQUEST';
export const HOMES_PAGINATION_SUCCESS = '@@api/HOMES_PAGINATION_SUCCESS';
export const HOMES_PAGINATION_FAILURE = '@@api/HOMES_PAGINATION_FAILURE';

export const fetchHomesCity = queryParameters => {
  const newQueryParameters = queryParameters;
  newQueryParameters.price = [0,10000000];
  newQueryParameters.m2Price = [0,10000];
  newQueryParameters.size = [0,100000];
  newQueryParameters.page = 1;
  const urlParameters = qs.stringify(newQueryParameters);
  const endpoint = `${SERVER_ENDPOINT}/homes?${urlParameters}`;
  return ({
    [RSAA]: {
      endpoint: endpoint,
      method: 'GET',
      headers: {'Content-Type':'application/json'},
      types: [HOMES_CITY_REQUEST, HOMES_CITY_SUCCESS, HOMES_CITY_FAILURE],
    },
  })
}

export const fetchHomesFilter = queryParameters => {
  const newQueryParameters = queryParameters;
  newQueryParameters.page = 1;
  const urlParameters = qs.stringify(newQueryParameters);
  const endpoint = `${SERVER_ENDPOINT}/homes?${urlParameters}`;
  return ({
    [RSAA]: {
      endpoint: endpoint,
      method: 'GET',
      headers: {'Content-Type':'application/json'},
      types: [HOMES_FILTER_REQUEST, HOMES_FILTER_SUCCESS, HOMES_FILTER_FAILURE],
    },
  })
}

export const fetchHomesPagination = queryParameters => {
  const urlParameters = qs.stringify(queryParameters);
  const endpoint = `${SERVER_ENDPOINT}/homes?${urlParameters}`;
  return ({
    [RSAA]: {
      endpoint: endpoint,
      method: 'GET',
      headers: {'Content-Type':'application/json'},
      types: [HOMES_PAGINATION_REQUEST, HOMES_PAGINATION_SUCCESS, HOMES_PAGINATION_FAILURE],
    },
  })
}
