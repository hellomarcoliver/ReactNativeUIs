import { combineReducers } from 'redux'
import auth from './Auth_Reducer'
import jobs from './Jobs_Reducer'
import likedJobs from './Likes_Reducer'

// so start define at least one reducers
// and you need to return something –cannot be undefined
export default combineReducers({
  auth, jobs, likedJobs
})
