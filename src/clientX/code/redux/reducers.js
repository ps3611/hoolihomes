const initalState = {
	isMapOn: false,
	filteredHomes: {
		homesList: []
	},
	queryParameters: {
		estimatedPricePercentageDifference: [-50,50],
		price: [0,2000000],
		size: [0,200],
		country: null,
		city: null,
		centerLatitude: 41.385063,
		centerLongitude: 2.173404,
		radius: 50000,
		page: 1,
	},
	totalPages: null,
	totalResults: null,
}

const reducer = (state = initalState, action) => {
	switch (action.type) {

	case 'MAP_TOGGLE':
		return {
			...state,
			isMapOn: action.bool
		}

	case 'FILTERED_HOMES_REQUEST':
		return {
			...state,
			errors: {},
		}

	case 'FILTERED_HOMES_SUCCESS':
		return {
			...state,
			filteredHomes: action.payload,
			errors: {},
		}

	case 'FILTERED_HOMES_FAILURE':
		return {
			...state,
			filteredHomes: {},
			errors: action.payload.response || {'non_field_errors': action.payload.statusText},
		}

	case 'UPDATE_QUERY_PARAMETERS':
		return {
			...state,
			queryParameters: action.qp
		}

	default:
		return state
	}
}

export default reducer
