import React, { Component } from 'react';
import { View } from 'react-native';

export default class FlexDirectionBasics extends Component {
  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{width: 150, height: 150, backgroundColor: 'powderblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      </View>

      // <View style={{
      //   flex: 1,
      //   flexDirection: 'column',
      //   justifyContent: 'space-between',
      // }}>
      //   <View style={{width: 150, height: 150, backgroundColor: 'powderblue'}} />
      //   <View style={{width: 150, height: 150, backgroundColor: 'skyblue'}} />
      //   <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      // </View>

      // <View style={{
      //   flex: 1,
      //   flexDirection: 'column',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      // }}>
      //   <View style={{width: 150, height: 150, backgroundColor: 'powderblue'}} />
      //   <View style={{width: 150, height: 150, backgroundColor: 'skyblue'}} />
      //   <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      // </View>

    );
  }
};
