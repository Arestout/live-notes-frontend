import * as types from './auth.types';

const rawUser = window.localStorage.getItem('user');

const initialState = {
  user: rawUser ? JSON.parse(rawUser) : null,
  access_token: JSON.parse(window.localStorage.getItem('access_token') || ''),
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SUCCESS_AUTH:
      return {
        ...state,
        user: action.payload.user,
        access_token: action.payload.access_token,
        isAuth: true,
      };
    case types.LOGOUT:
      return {
        user: null,
        access_token: null,
        isAuth: false,
      };
    default:
      return state;
  }
};
