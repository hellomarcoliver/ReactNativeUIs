import { combineReducers } from 'redux';

//we create one reducer which always returns an array
//we need to import that reducer in app.js
export default combineReducers({
  libraries: () => []
});
