import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Styles from './Styles';

export default class ReactCalculator extends Component {

    render() {
        return (
            <View style={Styles.rootContainer}>
                <View style={Styles.displayContainer}></View>
                <View style={Styles.inputContainer}></View>
            </View>
        )
    }
}
