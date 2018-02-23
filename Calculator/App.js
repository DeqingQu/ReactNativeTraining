import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, Alert, TouchableOpacity, Button } from 'react-native';

class NumberButton extends Component {
  constructor(props) {
    super(props);
    this.state = { number: props.number, flexW: +props.flexW, clickHandler: props.clickHandler }
  }

  render() {
    return (
      <TouchableOpacity style={{ backgroundColor: 'red', flex: this.state.flexW, justifyContent: 'center', alignItems: 'center' }} onPress={
        () => {
          this.state.clickHandler(this.state.number)
        }
      }>
        <Text> {this.state.number} </Text>
      </TouchableOpacity>
    );
  }
}


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { display: '0', step: 0, op1: null, op: 0, decimal: 0 };
  }

  clickNumber(number) {
    var dis = this.state.display;
    if (this.state.step == 0 || this.state.step == 2) {
      dis = '';
      this.setState({ step: this.state.step + 1 });
    }
    this.setState({ display: dis == '0' ? number : dis + number });
  }

  clickOperator(op) {
    if (this.state.step == 0 || this.state.step == 1) {
      this.setState({ op: op, op1: parseFloat(this.state.display), step: 2, decimal: 0 });
    }
    else if (this.state.step == 2) {
      this.setState({ op: op });
    }
    else if (this.state.step == 3) {
      this.calculate();
    }
  }

  calculate() {
    op1 = this.state.op1;
    op2 = parseFloat(this.state.display);
    switch (this.state.op) {
      case 1:
        this.setState({ display: (op1 + op2).toString(), step: 0, op1: null, decimal: 0, op: 0 });
        return true;
      case 2:
        this.setState({ display: (op1 - op2).toString(), step: 0, op1: null, decimal: 0, op: 0 });
        return true;
      case 3:
        this.setState({ display: (op1 * op2).toString(), step: 0, op1: null, decimal: 0, op: 0 });
        return true;
      case 4:
        this.setState({ display: (op1 / op2).toString(), step: 0, op1: null, decimal: 0, op: 0 });
        return true;
      default:
        return false;
    }
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ backgroundColor: 'black', flex: 0.3, marginBottom: 10, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 45 }}> {this.state.display} </Text>
        </View>
        <View style={{ backgroundColor: 'white', flex: 0.7, flexDirection: 'column', justifyContent: 'space-between' }}>
          <View style={{ backgroundColor: 'blue', flex: 0.18, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10 }}>
            <NumberButton flexW='0.22' number='C' clickHandler={() => {
              this.setState({ display: '0', step: 0, op1: null, op: 0, decimal: 0 });
            }} />
            <NumberButton flexW='0.22' number='+/-' clickHandler={() => {
              if (this.state.display.charAt(0) == '-') {
                this.setState({ display: this.state.display.slice(1) });
              }
              else {
                this.setState({ display: '-' + this.state.display });
              }
            }} />
            <NumberButton flexW='0.22' number='%' clickHandler={() => {
              this.setState({ display: (parseFloat(this.state.display) / 100).toString() });
            }} />
            <NumberButton flexW='0.22' number='/' clickHandler={() => {
              this.clickOperator(4);
            }} />
          </View>
          <View style={{ backgroundColor: 'blue', flex: 0.18, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10 }}>
            <NumberButton flexW='0.22' number='7' clickHandler={this.clickNumber.bind(this)} />
            <NumberButton flexW='0.22' number='8' clickHandler={this.clickNumber.bind(this)} />
            <NumberButton flexW='0.22' number='9' clickHandler={this.clickNumber.bind(this)} />
            <NumberButton flexW='0.22' number='*' clickHandler={() => {
              this.clickOperator(3);
            }} />
          </View>
          <View style={{ backgroundColor: 'blue', flex: 0.18, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10 }}>
            <NumberButton flexW='0.22' number='4' clickHandler={this.clickNumber.bind(this)} />
            <NumberButton flexW='0.22' number='5' clickHandler={this.clickNumber.bind(this)} />
            <NumberButton flexW='0.22' number='6' clickHandler={this.clickNumber.bind(this)} />
            <NumberButton flexW='0.22' number='-' clickHandler={() => {
              this.clickOperator(2);
            }} />
          </View>
          <View style={{ backgroundColor: 'blue', flex: 0.18, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10 }}>
            <NumberButton flexW='0.22' number='1' clickHandler={this.clickNumber.bind(this)} />
            <NumberButton flexW='0.22' number='2' clickHandler={this.clickNumber.bind(this)} />
            <NumberButton flexW='0.22' number='3' clickHandler={this.clickNumber.bind(this)} />
            <NumberButton flexW='0.22' number='+' clickHandler={() => {
              this.clickOperator(1);
            }} />
          </View>
          <View style={{ backgroundColor: 'blue', flex: 0.18, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10 }}>
            <NumberButton flexW='0.48' number='0' clickHandler={this.clickNumber.bind(this)} />
            <NumberButton flexW='0.22' number='.' clickHandler={() => {
              if (this.state.decimal == 0) {
                if (step == 0) {
                  dis = '0';
                  this.setState({ step: 1 });
                }
                this.setState({ display: dis + '.' });
              }
            }} />
            <NumberButton flexW='0.22' number='=' clickHandler={this.calculate.bind(this)} />
          </View>
        </View>
      </View>
    );
  }
}

