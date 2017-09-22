//Code that has everything to do with our employees

import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS,
  EMPLOYEE_FIRE_SUCCESS,
  EMPLOYEE_CLEAR_SUCCESS
} from './types';

//form did not clear –had to adjust: EmployeeActions, types, EmployeeFormReducer, EmployeeCreate
//https://www.udemy.com/the-complete-react-native-and-redux-course/learn/v4/questions/1713830
export const employeeClear = () => {
    return ({ type: EMPLOYEE_CLEAR_SUCCESS });
};

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

// fat arrow function that sends new data to firebase
export const employeeCreate = ({ name, phone, shift }) => {
  console.log(name, phone, shift);
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift })
    .then(() => {
      dispatch({ type: EMPLOYEE_CREATE });
      Actions.pop({ type: 'reset' });
    });
  };
};

// fat arrow function that fetches new data to firebase
export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

//the action creator to save the edited employeeForm
export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
        Actions.pop({ type: 'reset' });
      });
  };
};

//action to delete a employee card –gets called from the modal
export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        dispatch({ type: EMPLOYEE_FIRE_SUCCESS });
        Actions.pop({ type: 'reset' });
      });
  };
};
