import { RSAA } from 'redux-api-middleware';
import qs from 'qs';

const SERVER_ENDPOINT = 'http://127.0.0.1:3001';

export const HOMES_LIST_REQUEST = '@@api/HOMES_LIST_REQUEST';
export const HOMES_LIST_SUCCESS = '@@api/HOMES_LIST_SUCCESS';
export const HOMES_LIST_FAILURE = '@@api/HOMES_LIST_FAILURE';

export const fetchHomesList = queryParameters => {
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
