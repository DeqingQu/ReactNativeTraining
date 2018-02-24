import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class GreetingComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}
