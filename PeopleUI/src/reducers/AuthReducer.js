//creates one piece of state when our app boots up
//and its state.auth.email equals an empty string
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_START
} from '../actions/types';

//default the input fields and it also tells
//other developers that this reducer is responsible for
//email and password (code not necessary)
const INITIAL_STATE = {
  email: '',
  password: '',
  user: '',
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  // console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
    console.log('email is changing...');
    //make a new opject
    //take all properties from current state
    //define the property email and give it a value
    //of action.payload and toss it on top
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      console.log('password is changing...');
      return { ...state, password: action.payload };
    case LOGIN_USER_START:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
        console.log('I am logged in');
        return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
        return { ...state,
          error: 'Authentication failed. Try again.',
          password: '',
          loading: false };
    default:
    return state;
  }
};
