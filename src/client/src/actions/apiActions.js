import { RSAA } from 'redux-api-middleware';

export const HOMES_LIST_REQUEST = '@@api/HOMES_LIST_REQUEST';
export const HOMES_LIST_SUCCESS = '@@api/HOMES_LIST_SUCCESS';
export const HOMES_LIST_FAILURE = '@@api/HOMES_LIST_FAILURE';

export const fetchHomesList = page => {
  return ({
    [RSAA]: {
      endpoint: `http://127.0.0.1:3001/homes?page=${page}&city=barcelona&centerLatitude=41.385063&centerLongitude=2.173404&radius=50000&country=es`,
      method: 'GET',
      headers: {'Content-Type':'application/json'},
      types: [HOMES_LIST_REQUEST, HOMES_LIST_SUCCESS, HOMES_LIST_FAILURE],
    },
  })
}