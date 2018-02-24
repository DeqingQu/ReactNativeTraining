import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FlexDirectionBasics from "./src/FlexDirectionBasics"

export default class App extends React.Component {
  render() {
    return (
          /*  Flex Direction  */
          <FlexDirectionBasics />
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
