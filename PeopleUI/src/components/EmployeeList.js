/*  */

import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';


class EmployeeList extends Component {
  //this lifecycle method will mount the data first
  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
      return <ListItem employee={employee} />;
    }

  render() {
    // console.log(this.props);
    return (
      <ListView
        enableEmptySections //issue with react-native
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  //state.employees is an object with (key/val pairs)
  //for each run this fat arrow function
  //val has all properties such as name, phone, shift
  //endresult will be an object for each object in the array
  //then we collect all those objects and put it in an array
  //this is what map does
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
