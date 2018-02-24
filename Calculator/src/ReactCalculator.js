import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Style from './Style';
import InputButton from './InputButton';

const inputButtons = [
    [7, 8, 9, '/'],
    [4, 5, 6, '*'],
    [1, 2, 3, '-'],
    [0, 'C', '=', '+']
];

export default class ReactCalculator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayValue: 0,
            previousInputValue: 0,
            inputValue: 0,
            selectedSymbol: null,
            hasResult: false
        }
        this._outputState();
    }

    render() {
        return (
            <View style={Style.rootContainer}>
                <View style={Style.displayContainer}>
                    <Text style={Style.displayText}>{this.state.displayValue}</Text>
                </View>
                <View style={Style.inputContainer}>
                    {this._renderInputButtons()}
                </View>
            </View>
        )
    }

    _outputState() {
        let symbol = this.state.selectedSymbol,
            inputValue = this.state.inputValue,
            previousInputValue = this.state.previousInputValue;
        console.log(previousInputValue);
        console.log(symbol);
        console.log(inputValue);
    }

    _renderInputButtons() {
        let views = [];

        for (var r = 0; r < inputButtons.length; r ++) {
            let row = inputButtons[r];

            let inputRow = [];
            for (var i = 0; i < row.length; i ++) {
                let input = row[i];

                inputRow.push(
                    <InputButton
                        value={input}
                        highlight={this.state.selectedSymbol === input}
                        onPress={this._onInputButtonPressed.bind(this, input)}
                        key={r + "-" + i} />
                );
            }
            views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
        }
        return views;
    }

    _onInputButtonPressed(input) {
        switch (typeof input) {
            case 'number':
                this._handleNumberInput(input);
                break;
            case 'string':
                this._handleStringInput(input);
                break;
            default:
        }
    }

    _handleNumberInput(num) {
        if(this.state.hasResult && this.state.selectedSymbol == null) {
            this.setState({
                inputValue: num,
                displayValue: num,
                previousInputValue: 0,
                selectedSymbol: null,
                hasResult: false
            }, function() {
                this._outputState();
            });
        }
        else {
            let inputValue = (this.state.inputValue * 10) + num;
            this.setState({
                inputValue: inputValue,
                displayValue: inputValue
            }, function() {
                this._outputState();
            });
        }
    }

    _handleStringInput(str) {
        switch (str) {
            case '/':
            case '*':
            case '+':
            case '-':
                this.setState({
                    selectedSymbol: str,
                    previousInputValue: this.state.inputValue,
                    inputValue: 0
                }, function() {
                    this._outputState();
                });
                break;
            case '=':
                let symbol = this.state.selectedSymbol,
                    inputValue = this.state.inputValue,
                    previousInputValue = this.state.previousInputValue;

                if (!symbol) {
                    return;
                }
                let result = eval(previousInputValue + symbol + inputValue);
                this.setState({
                    displayValue: result,
                    previousInputValue: 0,
                    inputValue: result,
                    selectedSymbol: null,
                    hasResult: true
                }, function() {
                    this._outputState();
                });
                break;
            case 'C':
                this.setState({
                    displayValue: 0,
                    previousInputValue: 0,
                    inputValue: 0,
                    selectedSymbol: null,
                    hasResult: false
                }, function() {
                    this._outputState();
                });
                break;
            default:
        }
    }
}
