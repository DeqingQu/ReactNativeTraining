import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Counter from "./src/Counter"
import EvenCounter from "./src/EvenCounter"

export default class App extends React.Component {
    render() {
      return (
            <View style={styles.container}>
                <Counter text="I love counter: " />
                <EvenCounter text="I love even counter: " />
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
