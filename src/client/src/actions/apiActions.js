import { RSAA } from 'redux-api-middleware';
import qs from 'qs';

const SERVER_ENDPOINT = 'http://127.0.0.1:3001';

export const HOMES_LIST_REQUEST = '@@api/HOMES_LIST_REQUEST';
export const HOMES_LIST_SUCCESS = '@@api/HOMES_LIST_SUCCESS';
export const HOMES_LIST_FAILURE = '@@api/HOMES_LIST_FAILURE';

export const INIT_HOMES_LIST_REQUEST = '@@api/INIT_HOMES_LIST_REQUEST';
export const INIT_HOMES_LIST_SUCCESS = '@@api/INIT_HOMES_LIST_SUCCESS';
export const INIT_HOMES_LIST_FAILURE = '@@api/INIT_HOMES_LIST_FAILURE';

export const fetchHomesList = (queryParameters, init) => {
  const urlParameters = qs.stringify(queryParameters);
	const endpoint = `${SERVER_ENDPOINT}/homes?${urlParameters}`;
  if (init) {
    return ({
      [RSAA]: {
        endpoint: endpoint,
        method: 'GET',
        headers: {'Content-Type':'application/json'},
        types: [INIT_HOMES_LIST_REQUEST, INIT_HOMES_LIST_SUCCESS, INIT_HOMES_LIST_FAILURE],
      },
    })
  }
  else {
    return ({
      [RSAA]: {
        endpoint: endpoint,
        method: 'GET',
        headers: {'Content-Type':'application/json'},
        types: [HOMES_LIST_REQUEST, HOMES_LIST_SUCCESS, HOMES_LIST_FAILURE],
      },
    })
  }
}
