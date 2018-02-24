import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import GreetingComponent from "./src/Greeting"

export default class App extends React.Component {
  render() {
    return (
          /*  Props   */
          <View style={styles.container}>
              <GreetingComponent name='Alice' />
              <GreetingComponent name='Bob' />
              <GreetingComponent name='Charlie' />
          </View>
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
