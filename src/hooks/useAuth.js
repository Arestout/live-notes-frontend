import { useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import * as authActions from '../redux/auth/auth.actions';

export const useAuth = () => {
  const auth = useSelector((state) => state.auth, shallowEqual);

  const dispatch = useDispatch();

  const dispatchUpdateAuth = useCallback(
    ({ user, access_token }) =>
      dispatch(authActions.updateAuth({ user, access_token })),
    [dispatch]
  );

  const dispatchLogOut = useCallback(() => dispatch(authActions.onLogOut()), [
    dispatch,
  ]);

  //   const dispatchFetchAuth = useCallback(
  //     (session_id) => {
  //       dispatch(authActions.fetchRequestAuth());
  //       dispatch(authActions.fetchAuth(session_id));
  //     },
  //     [dispatch]
  //   );

  const dispatchFetchAuthOnLogin = useCallback(
    ({ email, password }) => {
      dispatch(authActions.fetchAuthOnLogin({ email, password }));
    },
    [dispatch]
  );

  return {
    auth,
    dispatchUpdateAuth,
    dispatchLogOut,
    dispatchFetchAuthOnLogin,
  };
};
