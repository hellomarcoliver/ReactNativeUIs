/* manage all scenes/views from the app */

import React from 'react';
import { Stack, Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
// import EmployeeEdit from './components/EmployeeEdit';


const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root" modal hideNavBar>

        <Scene key="auth" initial title="Login" >
          <Scene key="login" component={LoginForm} />
        </Scene>

        <Scene key="main">
          <Scene
            key="employeeList"
            // onLeft={() => null}
            component={EmployeeList}
            title="Employees"
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
            initial
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
            leftTitle="Cancel"
          />
          {/* <Scene
            key='employeeEdit'
            component={EmployeeEdit}
            title='Employee Edit'
          /> */}
        </Scene>

    </Stack>
    </Router>
  );
};

export default RouterComponent;
