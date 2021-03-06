import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View } from 'react-native';
import Style from './src/Style';
import InputButton from './src/InputButton';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        inputValue: 0,
    }
  }

    render() {
        return (
            <View style = {Style.rootContainer}>
                <View style={Style.displayContainer}>
                    <Text style={Style.displayText}>{this.state.inputValue}</Text>
                </View>
                <View style={Style.inputContainer}>
                    <View style={Style.inputButtonRow}>
                    {/********* EXERCISE 4 : INSERT CALCULATOR BUTTONS *********/}
                        {/* <InputButton value={} onPress={this._onInputButtonPressed.bind(this)}/>
                        <InputButton value={} onPress={this._onInputButtonPressed.bind(this)}/>
                        <InputButton value={} onPress={this._onInputButtonPressed.bind(this)}/>
                        <InputButton value={} onPress={this._onInputButtonPressed.bind(this)}/> */}
                    </View>
                    <View style={Style.inputButtonRow}>
                        {/* <InputButton value={} onPress={this._onInputButtonPressed.bind(this)}/>
                        <InputButton value={} onPress={this._onInputButtonPressed.bind(this)}/>
                        <InputButton value={} onPress={this._onInputButtonPressed.bind(this)}/>
                        <InputButton value={} onPress={this._onInputButtonPressed.bind(this)}/> */}
                    </View>
                    <View style={Style.inputButtonRow}>
                        {/* <InputButton value={} onPress={this._onInputButtonPressed.bind(this)}/>
                        <InputButton value={} onPress={this._onInputButtonPressed.bind(this)}/>
                        <InputButton value={} onPress={this._onInputButtonPressed.bind(this)}/>
                        <InputButton value={} onPress={this._onInputButtonPressed.bind(this)}/> */}
                    </View>
                    <View style={Style.inputButtonRow}>
                        {/* <InputButton value={} onPress={this._onInputButtonPressed.bind(this)}/>
                        <InputButton value={} onPress={this._onInputButtonPressed.bind(this)}/>
                        <InputButton value={} onPress={this._onInputButtonPressed.bind(this)}/>
                        <InputButton value={} onPress={this._onInputButtonPressed.bind(this)}/> */}
                    </View>
                </View>
            </View>
        )
    }

    _onInputButtonPressed(value) {
        switch (typeof value) {
            case 'number':
                return this._handleNumberInput(value)
            case 'string':
                return this._handleStringInput(value)
        }
    }

    _handleNumberInput(num) {
        let inputValue = (this.state.inputValue * 10) + num;

        this.setState({
            inputValue: inputValue
        })
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
            });
            break;
        case '=':
            let symbol = this.state.selectedSymbol,
                inputValue = this.state.inputValue,
                previousInputValue = this.state.previousInputValue;
            
            if (!symbol) {
                return;
            }

            this.setState({
                previousInputValue: 0,
                inputValue: eval(previousInputValue + symbol + inputValue),
                selectedSymbol: null
            });
            break;
        case 'C':
            {/********* EXERCISE 5 : COMPLETE CASE C *********/}
        }
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
