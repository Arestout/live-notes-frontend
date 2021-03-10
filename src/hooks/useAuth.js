import { useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import * as authActions from '../redux/auth/auth.actions';

export const useAuth = () => {
  const auth = useSelector((state) => state.auth, shallowEqual);

  const dispatch = useDispatch();

  const dispatchFetchRequestAuth = useCallback(
    () => dispatch(authActions.fetchRequestAuth()),
    [dispatch]
  );

  const dispatchUpdateUser = useCallback(
    (user) => dispatch(authActions.updateUser(user)),
    [dispatch]
  );

  const dispatchUpdateToken = useCallback(
    (access_token) => dispatch(authActions.updateToken(access_token)),
    [dispatch]
  );

  const dispatchLogOut = useCallback(() => dispatch(authActions.onLogOut()), [
    dispatch,
  ]);

  const dispatchFetchAuth = useCallback(
    (access_token) => {
      dispatch(authActions.fetchAuth(access_token));
    },
    [dispatch]
  );

  const dispatchFetchAuthOnLogin = useCallback(
    ({ email, password }) => {
      dispatch(authActions.fetchAuthOnLogin({ email, password }));
    },
    [dispatch]
  );

  return {
    auth,
    dispatchFetchRequestAuth,
    dispatchUpdateUser,
    dispatchUpdateToken,
    dispatchLogOut,
    dispatchFetchAuthOnLogin,
    dispatchFetchAuth,
  };
};
