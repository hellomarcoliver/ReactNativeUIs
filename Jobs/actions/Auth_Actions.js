import { AsyncStorage } from 'react-native'
import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from './Types'
import { Facebook } from 'expo'

// How to use AsyncStorage:
// AsyncStorage.setItem('fb_token', token);
// AsyncStorage.getItem('fb_token');

// get the stuff, wait a bit and add it to 'let token'
export const facebookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem('fb_token') // this returns a promise
  if (token) {
    // dispatch an action saying FB login is done
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token })
  } else {
    // start up FB login process
    doFacebookLogin(dispatch)
  }
}

const doFacebookLogin = async dispatch => {
  let { type, token } = await Facebook.logInWithReadPermissionsAsync('1723902481249919', {
    permissions: ['public_profile']
  })
  // cancel if all fails
  if (type === 'cancel') {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL })
  }
  // go safe the token
  await AsyncStorage.setItem('fb_token', token)
  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token })
}
