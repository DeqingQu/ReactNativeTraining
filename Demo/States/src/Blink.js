import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

export default class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // isShowingText: true,
            counter: 0
        };

        // Toggle the state every second
        setInterval(() => {
            let counter = this.state.counter;
            this.setState({
                counter: counter+1
            });
            // this.setState((previousState) => {
            //     return { isShowingText: !previousState.isShowingText };
            // });
        }, 1000);
  }

    render() {
        // let display = this.state.isShowingText ? this.props.text : ' ';
        let display = this.props.text + " " + this.state.counter;
        return (
            <Text>{display}</Text>
        );
    }
}
