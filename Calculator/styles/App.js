import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View } from 'react-native';
import Style from './src/Style';
import InputButton from './src/InputButton';


export default class App extends Component {

  render() {
      return (
          <View style = {Style.rootContainer}>
             <View style={Style.displayContainer}></View>
             <View style={Style.inputContainer}></View>
          </View>
      )
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
