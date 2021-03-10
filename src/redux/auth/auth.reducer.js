import * as types from './auth.types';

const token = window.localStorage.getItem('access_token');

const initialState = {
  user: null,
  access_token: token || null,
  isLoading: false,
  isAuth: false,
  error: '',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST_AUTH:
      return {
        ...state,
        isLoading: true,
      };
    case types.FETCH_SUCCESS_TOKEN:
      return {
        ...state,
        access_token: action.payload,
      };
    case types.FETCH_SUCCESS_AUTH:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isAuth: true,
      };
    case types.LOGOUT:
      return {
        user: null,
        access_token: null,
        isAuth: false,
      };
    case types.FETCH_ERROR_AUTH:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
