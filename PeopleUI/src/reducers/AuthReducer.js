//creates one piece of state when our app boots up
//and its state.auth.email equals an empty string
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED
} from '../actions/types';

//default the input fields and it also tells
//other developers that this reducer is responsible for
//email and password
const INITIAL_STATE = { email: '', password: '' };

export default (state = INITIAL_STATE, action) => {
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
    default:
    return state;
  }
};
