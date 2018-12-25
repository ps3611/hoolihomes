import * as api from '../../actions/apiActions';

const initialState = {
  loading: false,
  errors: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case api.HOMES_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        errors: {},
      };
    case api.HOMES_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: {},
      };
    case api.HOMES_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload.response || { non_field_errors: action.payload.statusText },
      };
    default:
      return state;
  }
};