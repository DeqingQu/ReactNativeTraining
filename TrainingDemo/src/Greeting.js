import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class GreetingComponent extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}
