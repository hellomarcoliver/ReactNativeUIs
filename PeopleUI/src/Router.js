/* manage all scenes/views from the app */

import React from 'react';
import { View, StatusBar } from 'react-native';
import { Stack, Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';


const RouterComponent = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        backgroundColor="blue"
        barStyle="light-content"
      />
      <Router
        navigationBarStyle={{ backgroundColor: '#0095FE', borderBottomWidth: 0 }}
        headerTitleStyle={{ color: 'white' }}
        navigationOptions={{ headerTintColor: 'white' }}
        getSceneStyle={getSceneStyle}
      >
          <Stack key="root" modal hideNavBar>
            <Stack key="auth" initial title="Login Now" >
              <Scene
                key="login"
                component={LoginForm}
              />
            </Stack>

            <Stack key="main">
              <Scene
                key="employeeList"
                // onLeft={() => null}
                component={EmployeeList}
                title="Employees"
                rightTitle="Add"
                navBarButtonColor='white'
                onRight={() => Actions.employeeCreate()}
                initial
              />
              <Scene
                key="employeeCreate"
                component={EmployeeCreate}
                title="Create Employee"
                leftTitle="Cancel"
                tintColor='white'
                navBarButtonColor='white'
              />
              <Scene
                key='employeeEdit'
                component={EmployeeEdit}
                title="Employee Edit"
                leftTitle="Cancel"
                tintColor='white'
                navBarButtonColor='white'
              />
            </Stack>

          </Stack>
        </Router>
      </View>
    );
  };

  const getSceneStyle = () => {
    const style = {
      backgroundColor: '#89DFFE',
    };
    return style;
  };


  export default RouterComponent;
