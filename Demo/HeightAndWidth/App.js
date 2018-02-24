import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FixedDimensionsBasics from "./src/FixedDimensionsBasics"
import FlexDimensionsBasics from "./src/FlexDimensionsBasics"

export default class App extends React.Component {
  render() {
    return (
        /*  Fixed Dimenstions   */
        <FixedDimensionsBasics />

        /*  Flex Dimenstions   */
        // <FlexDimensionsBasics />
    );
  }
}
