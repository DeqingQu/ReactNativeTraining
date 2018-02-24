import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ButtonBasics from "./src/ButtonBasics"

export default class App extends React.Component {
  render() {
    return (
          /*  Button Basics   */
          <ButtonBasics />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
