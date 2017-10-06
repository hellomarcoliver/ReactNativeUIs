import { combineReducers } from 'redux'
import auth from './Auth_Reducer'

// so start define at least one reducers
// and you need to return something – cannot be undefined
export default combineReducers({
  auth: auth // we can just also do auth
})
