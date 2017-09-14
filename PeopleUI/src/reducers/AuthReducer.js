//creates one piece of state when our app boots up
//and its state.auth.email equals an empty string
import { EMAIL_CHANGED } from '../actions/types';


const INITIAL_STATE = { email: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      console.log('Go as soon as you type...');
      //make a new opject
      //take all properties from current state
      //define the property email and give it a value
      //of action.payload and toss it on top
      return { ...state, email: action.payload };
    default:
    return state;
  }
};
