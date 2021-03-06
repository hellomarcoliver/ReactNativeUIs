import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS,
  EMPLOYEE_FIRE_SUCCESS,
  EMPLOYEE_CLEAR_SUCCESS
} from '../actions/types';

//not needed but informs other developers
const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      //because we are in a reducer, we always want to return a state
      //square braces is not an array!!! this is ES6 (key-interpolation)
      return { ...state, [action.payload.prop]: action.payload.value };
    //this will clear out the input forms after save and edit
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
    case EMPLOYEE_SAVE_SUCCESS:
      return INITIAL_STATE;
    case EMPLOYEE_FIRE_SUCCESS:
      return INITIAL_STATE;
    case EMPLOYEE_CLEAR_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
