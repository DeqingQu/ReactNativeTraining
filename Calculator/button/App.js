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
                {/* EXERCISE: INSERT CALCULATOR BUTTONS */}
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
