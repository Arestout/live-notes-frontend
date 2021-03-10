import * as types from './auth.types';
import Api from '../../api/api';

export const fetchRequestAuth = () => {
  return {
    type: types.FETCH_REQUEST_AUTH,
  };
};

export const updateToken = (access_token) => ({
  type: types.FETCH_SUCCESS_TOKEN,
  payload: access_token,
});

export const updateUser = (user) => ({
  type: types.FETCH_SUCCESS_AUTH,
  payload: user,
});

export const fetchAuth = (access_token) => async (dispatch) => {
  dispatch(fetchRequestAuth());
  try {
    const result = await Api.post(
      '/auth/me',
      {},
      {
        headers: {
          Authorization: `bearer ${access_token}`,
        },
      }
    );
    dispatch(updateUser(result.data));
  } catch (error) {
    console.log(error);
    dispatch({
      type: types.FETCH_ERROR_AUTH,
      payload: error.message,
    });
  }
};

export const fetchAuthOnLogin = (data) => async (dispatch) => {
  try {
    const result = await Api.post('/auth/login', data);
    const { access_token } = result.data;
    window.localStorage.setItem('access_token', access_token);
    return dispatch(updateToken(access_token));
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: types.FETCH_ERROR_AUTH,
      payload: error.message,
    });
  }
};

export const onLogOut = () => (dispatch) => {
  window.localStorage.removeItem('access_token');
  dispatch({
    type: types.LOGOUT,
  });
};
