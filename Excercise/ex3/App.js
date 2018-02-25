import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={Style.rootContainer}>
        <View style={Style.displayContainer}></View>
        <View style={Style.inputContainer}></View>
      </View>
    );
  }
}

const Style = StyleSheet.create({
    rootContainer: {
    },

    displayContainer: {
        backgroundColor: '#193441'
    },

    inputContainer: {
        backgroundColor: '#3E606F'
    }
});
