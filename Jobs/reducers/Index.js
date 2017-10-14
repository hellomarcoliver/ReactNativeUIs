import { combineReducers } from 'redux'
import auth from './Auth_Reducer'
import jobs from './Jobs_Reducer'

// so start define at least one reducers
// and you need to return something –cannot be undefined
export default combineReducers({
  auth, jobs // list of jobs exists on the 'jobs' state
})
