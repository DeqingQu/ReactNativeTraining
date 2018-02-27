import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Counter from "./src/Counter"

export default class App extends React.Component {
    render() {
      return (
            <View style={styles.container}>
                <Counter text="I love counter: " step='1' />
                <Counter text="I love even counter: " step='2' />
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
