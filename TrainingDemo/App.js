import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HelloWorldComponent from "./src/HelloWorld"
import GreetingComponent from "./src/Greeting"
import Blink from "./src/Blink"
import StyleComponent from "./src/Style"
import FixedDimensionsBasics from "./src/FixedDimensionsBasics"
import FlexDimensionsBasics from "./src/FlexDimensionsBasics"
import FlexDirectionBasics from "./src/FlexDirectionBasics"
import ButtonBasics from "./src/ButtonBasics"

export default class App extends React.Component {
  render() {
    return (
        /*  HelloWorld Component    */
          <View style={styles.container}>
            <HelloWorldComponent />
          </View>

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
          // <StyleComponent />

          /*  Fixed Dimenstions   */
          // <FixedDimensionsBasics />

          /*  Flex Dimenstions   */
          // <FlexDimensionsBasics />

          /*  Flex Direction  */
          // <FlexDirectionBasics />

          /*  Button Basics   */
          // <ButtonBasics />
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
