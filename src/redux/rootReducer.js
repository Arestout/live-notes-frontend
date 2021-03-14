import { combineReducers } from 'redux';

import { authReducer } from './auth';
import { entriesReducer } from './entries';

export const rootReducer = combineReducers({
  auth: authReducer,
  entries: entriesReducer,
});
