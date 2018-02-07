/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import HelloWorldComponent from "./src/HelloWorld"
import GreetingComponent from "./src/Greeting"
import Blink from "./src/Blink"

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        /*  HelloWorld Component    */
        // <View style={styles.container}>
        //   <HelloWorldComponent />
        // </View>

        /*  Props   */
        // <View style={styles.container}>
        //     <GreetingComponent name='Alice' />
        //     <GreetingComponent name='Bob' />
        //     <GreetingComponent name='Charlie' />
        // </View>

        /*  state   */
        // <View style={styles.container}>
        //     <Blink text='I love to blink' />
        //     <Blink text='Yes blinking is so great' />
        // </View>

        /*  Style   */
        <View style={styles.container}>
            <Text style={styles.red}>just red</Text>
            <Text style={styles.bigblue}>just bigblue</Text>
            <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
            <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
        </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
