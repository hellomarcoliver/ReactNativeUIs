import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate, employeeClear } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

//create a class based component since it can change
class EmployeeCreate extends Component {
  componentWillMount() {
    this.props.employeeClear();
}

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Wednesday' });
  }

  render() {
    // console.log(this.props.employee); //to test the click on the list item
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create & Close
          </Button>
        </CardSection>
      </Card>
    );
  }
}


const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate,
  employeeCreate,
  employeeClear
})(EmployeeCreate);
