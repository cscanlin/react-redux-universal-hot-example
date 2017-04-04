const RETRIEVE = 'redux-example/weather/GET';
const RETRIEVE_SUCCESS = 'redux-example/weather/GET_SUCCESS';
const RETRIEVE_FAIL = 'redux-example/weather/GET_FAIL';

const initialState = {
  loading: false,
  loaded: false,
  data: {},
  error: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case RETRIEVE:
      return {
        ...state,
        loading: true
      };
    case RETRIEVE_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result,
        error: null
      };
    case RETRIEVE_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        error: action.error
      };
    default:
      return state;
  }
}

export function retrieve(zipCode) {
  return {
    types: [RETRIEVE, RETRIEVE_SUCCESS, RETRIEVE_FAIL],
    promise: (client) => client.post(`/weather/retrieve`, {zipCode: zipCode})
  };
}
