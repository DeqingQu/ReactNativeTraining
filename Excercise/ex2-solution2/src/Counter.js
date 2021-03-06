import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };

        // Toggle the state every second
        setInterval(() => {
            let counter = this.state.counter + this.props.step;
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

Counter.propTypes = {
    step: PropTypes.number,
    text: PropTypes.string
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  }
});
