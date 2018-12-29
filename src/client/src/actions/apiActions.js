import { RSAA } from 'redux-api-middleware';
import qs from 'qs';

const SERVER_ENDPOINT = 'http://127.0.0.1:3001';

export const HOMES_LIST_REQUEST = '@@api/HOMES_LIST_REQUEST';
export const HOMES_LIST_SUCCESS = '@@api/HOMES_LIST_SUCCESS';
export const HOMES_LIST_FAILURE = '@@api/HOMES_LIST_FAILURE';

export const INIT_HOMES_LIST_REQUEST = '@@api/INIT_HOMES_LIST_REQUEST';
export const INIT_HOMES_LIST_SUCCESS = '@@api/INIT_HOMES_LIST_SUCCESS';
export const INIT_HOMES_LIST_FAILURE = '@@api/INIT_HOMES_LIST_FAILURE';

export const fetchHomesListCity = queryParameters => {
    const newQueryParameters = queryParameters;
    newQueryParameters.price = [0,10000000];
    newQueryParameters.m2Price = [0,10000];
    newQueryParameters.size = [0,100000];
    const urlParameters = qs.stringify(newQueryParameters);
    const endpoint = `${SERVER_ENDPOINT}/homes?${urlParameters}`;
    return ({
      [RSAA]: {
        endpoint: endpoint,
        method: 'GET',
        headers: {'Content-Type':'application/json'},
        types: [INIT_HOMES_LIST_REQUEST, INIT_HOMES_LIST_SUCCESS, INIT_HOMES_LIST_FAILURE],
      },
    })
}

export const fetchHomesList = (queryParameters) => {
  const urlParameters = qs.stringify(queryParameters);
  const endpoint = `${SERVER_ENDPOINT}/homes?${urlParameters}`;
  return ({
    [RSAA]: {
      endpoint: endpoint,
      method: 'GET',
      headers: {'Content-Type':'application/json'},
      types: [HOMES_LIST_REQUEST, HOMES_LIST_SUCCESS, HOMES_LIST_FAILURE],
    },
  })
}
