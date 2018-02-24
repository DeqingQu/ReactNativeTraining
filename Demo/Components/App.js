import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HelloWorldComponent from "./src/HelloWorld"

export default class App extends React.Component {
  render() {
    return (
        /*  HelloWorld Component    */
          <View style={styles.container}>
            <HelloWorldComponent />
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
