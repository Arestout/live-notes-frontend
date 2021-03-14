import { useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import * as entriesActions from '../redux/entries/entries.actions';

export const useEntries = () => {
  const entries = useSelector((state) => state.entries, shallowEqual);

  const dispatch = useDispatch();

  const dispatchFetchRequestEntries = useCallback(
    () => dispatch(entriesActions.fetchRequestEntries()),
    [dispatch]
  );

  const dispatchUpdateEntries = useCallback(
    (entries) => dispatch(entriesActions.updateEntries(entries)),
    [dispatch]
  );

  const dispatchFetchEntries = useCallback(
    (access_token) => {
      dispatch(entriesActions.fetchEntries(access_token));
    },
    [dispatch]
  );

  const dispatchDeleteEntry = useCallback(
    ({ id, access_token }) =>
      dispatch(entriesActions.deleteEntry({ id, access_token })),
    [dispatch]
  );

  return {
    entries,
    dispatchFetchRequestEntries,
    dispatchUpdateEntries,
    dispatchFetchEntries,
    dispatchDeleteEntry,
  };
};
