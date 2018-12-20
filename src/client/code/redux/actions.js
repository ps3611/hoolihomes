import { RSAA } from 'redux-api-middleware'
import qs from 'qs'
const serverAddress = 'http://192.168.1.163:3001'

export const mapToggle = data => ({
	type: 'MAP_TOGGLE',
	bool: data,
})

export const getFilteredHomes = (queryParameters) => {
	const urlParameters = qs.stringify(queryParameters)
	const endpoint = `${serverAddress}/homes?${urlParameters}`
	return {
		[RSAA]: {
			endpoint: endpoint,
			method: 'GET',
			types: [ 'FILTERED_HOMES_REQUEST', 'FILTERED_HOMES_SUCCESS', 'FILTERED_HOMES_FAILURE' ]
		},
	}
}

export const filterHomes = apiInfo => ({
	type: 'FILTER_HOMES',
	api: {
		endpoint: apiInfo.endpoint,
		method: apiInfo.method,
		body: apiInfo.body,
		headers: apiInfo.headers,
	}
})

export const queryParameters = data => ({
	type: 'UPDATE_QUERY_PARAMETERS',
	qp: data,
})
