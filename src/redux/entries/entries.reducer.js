import * as types from './entries.types';

const initialState = {
  isLoading: false,
  entriesList: null,
  error: '',
};

export const entriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST_ENTRIES:
      return {
        ...state,
        isLoading: true,
      };
    case types.FETCH_SUCCESS_ENTRIES:
      return {
        ...state,
        entriesList: action.payload,
        isLoading: false,
      };
    case types.FETCH_ERROR_ENTRIES:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
