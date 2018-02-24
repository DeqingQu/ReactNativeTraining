import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Blink from "./src/Blink"

export default class App extends React.Component {
  render() {
    return (

          /*  state   */
          <View style={styles.container}>
              <Blink text='I love to blink' />
              <Blink text='Yes blinking is so great' />
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
