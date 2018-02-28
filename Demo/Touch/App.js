import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { txt: 'Hellp World' };
  }

  onPress() {
    alert(this.state.txt);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.button}
          onPress={this.onPress.bind(this)}
        >
          <Text> Touch Here </Text>
        </TouchableHighlight>
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
  botton: {
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
