import * as types from './auth.types';
import Api from '../../api/api';
// import { Movies } from 'reduxApp/movies/movies.types';

// export const fetchRequestAuth = () => {
//   return {
//     type: types.FETCH_REQUEST_AUTH,
//   };
// };

// export const fetchAuth = (session_id) => async (dispatch) => {
//   try {
//     const user = await CallApi.get('/account', {
//       params: {
//         session_id,
//       },
//     });
//     dispatch(updateAuth({ user, session_id }));
//     dispatch(fetchFavoriteMovies({ user, session_id }));
//     dispatch(fetchWatchListMovies({ user, session_id }));
//   } catch (error) {
//     dispatch({
//       type: types.FETCH_ERROR_AUTH,
//       payload: error,
//     });
//   }
// };

export const updateAuth = ({ user, access_token }) => ({
  type: types.FETCH_SUCCESS_AUTH,
  payload: {
    user,
    access_token,
  },
});

export const fetchAuthOnLogin = (data) => async (dispatch) => {
  console.log('DATA', data);
  try {
    const response = await Api.post('/auth/login', data);
    const { dataUser, access_token } = response.data;
    window.localStorage.setItem('access_token', JSON.stringify(access_token));
    window.localStorage.setItem('user', JSON.stringify(dataUser));
    dispatch(updateAuth({ user: dataUser, access_token }));
  } catch (error) {
    dispatch({
      type: types.FETCH_ERROR_AUTH,
      payload: error,
    });
  }
};

export const onLogOut = () => (dispatch) => {
  window.localStorage.removeItem('access_token');
  window.localStorage.removeItem('user');
  dispatch({
    type: types.LOGOUT,
  });
};
