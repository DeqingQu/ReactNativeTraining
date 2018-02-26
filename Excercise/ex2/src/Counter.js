import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };

        // Toggle the state every second
        setInterval(() => {
            let counter = this.state.counter + 1;
            this.setState({
                counter: counter
            });
        }, 1000);
  }

    render() {
        let display = this.props.text + " " + this.state.counter;
        return (
            <Text>{display}</Text>
        );
    }
}
