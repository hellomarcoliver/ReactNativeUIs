/* Remember: Our state is our applications data */

import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

//we create one reducer which always returns an array or some amount of data
// we need to import that reducer in app.js
export default combineReducers({
  dataToShow1: LibraryReducer
});
