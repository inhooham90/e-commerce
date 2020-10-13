import { combineReducers } from 'redux';

import userReducer from './reducers/user.reducer';
import UIReducer from './reducers/ui.reducer';

export default combineReducers({
  user: userReducer,
  ui: UIReducer,
});