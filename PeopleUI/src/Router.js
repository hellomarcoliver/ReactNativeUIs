/* manage all scenes/views from the app */

import React from 'react';
import { Stack, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 30 }}>
      <Stack key="root">
        <Scene key="login" component={LoginForm} title="Login" />
        <Scene key='employeeList' component={EmployeeList} title="Employees" />
      </Stack>
    </Router>
  );
};


export default RouterComponent;
