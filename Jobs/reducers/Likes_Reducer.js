import _ from 'lodash'
// import { REHYDRATE } from 'redux-persist/constants'
import {
  LIKE_JOB,
  CLEAR_LIKED_JOBS
} from '../actions/Types'

// uniqBy compares the liked jobs and only returns unique jobs
// so same jobs do not show up twice
export default function (state = [], action) {
  switch (action.type) {
    case CLEAR_LIKED_JOBS:
      return []
    case LIKE_JOB:
      return _.uniqBy([
        action.payload, ...state
      ], 'jobkey')
    default:
      return state
  }
}