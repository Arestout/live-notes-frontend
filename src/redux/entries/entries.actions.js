import * as types from './entries.types';
import Api from '../../api/api';

export const fetchRequestEntries = () => {
  return {
    type: types.FETCH_REQUEST_ENTRIES,
  };
};

export const updateEntries = (entries) => ({
  type: types.FETCH_SUCCESS_ENTRIES,
  payload: entries,
});

export const fetchEntries = (access_token) => async (dispatch) => {
  dispatch(fetchRequestEntries());
  try {
    const result = await Api.get('/blog', {
      headers: {
        Authorization: `bearer ${access_token}`,
      },
    });

    dispatch(updateEntries(result.data));
  } catch (error) {
    console.log(error);
    dispatch({
      type: types.FETCH_ERROR_ENTRIES,
      payload: error.message,
    });
  }
};
export const deleteEntry = ({ id, access_token }) => async (dispatch) => {
  try {
    await Api.delete(`/blog/${id}`, {
      headers: {
        Authorization: 'bearer' + access_token,
      },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: types.FETCH_ERROR_ENTRIES,
      payload: error.message,
    });
  }
};
