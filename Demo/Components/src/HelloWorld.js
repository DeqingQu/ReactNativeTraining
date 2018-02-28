import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

export default class HelloWorldComponent extends React.Component {
  render() {
    return (
      <Text style={styles.text}>Hello world!</Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  }
});
