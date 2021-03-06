import axios from 'axios'
import reverseGeocode from 'latlng-to-zip'
import qs from 'qs'
import { FETCH_JOBS, LIKE_JOB, CLEAR_LIKED_JOBS } from './Types'

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?'
// takes a raw js object and turns it into a url-save query string
const JOB_QUERY_PARAMS = {
  publisher: '4201738803816157',
  format: 'json',
  v: '2',
  latlong: 1,
  radius: 10,
  q: 'javascript'
}

const buildJobsUrl = zipCode => {
  const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zipCode })
  return `${JOB_ROOT_URL}${query}`
}

// the 'callback' stems from the onButtonPress
export const fetchJobs = (region, callback) => async dispatch => {
  try {
    let zipCode = await reverseGeocode(region)
    const url = buildJobsUrl(zipCode)
    let { data } = await axios.get(url)
    dispatch({ type: FETCH_JOBS, payload: data })
    console.log(data)
    callback()
  } catch (e) {
    console.error(e)
  }
}

export const clearLikedJobs = () => {
  return { type: CLEAR_LIKED_JOBS }
}

export const likeJob = (job) => {
  return {
    payload: job,
    type: LIKE_JOB
  }
}
