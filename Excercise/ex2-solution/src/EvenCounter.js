import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

export default class EvenCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
        // Toggle the state every second
        setInterval(() => {
            let counter = this.state.counter + 2;
            this.setState({
                counter: counter
            });
        }, 1000);
  }

    render() {
        let display = this.props.text + " " + this.state.counter;
        return (
            <Text style={styles.text}>{display}</Text>
        );
    }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  }
});
