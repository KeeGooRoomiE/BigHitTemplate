import React, { Component } from "react";
import { View, StyleSheet,Image } from "react-native";

export default class MockComponent extends Component {
  render() {
    let variant = this.props.mockScreen;
    let screen=require('../src/mocks/Balance.png');

    switch (variant) {
      case "phistory":
        screen=require('../src/mocks/PHistory.png');
        break;
      case "balance":
        screen=require('../src/mocks/Balance.png');
        break;
      case "payment":
        screen=require('../src/mocks/Payment.png');
        break;
      default: 
      screen=require('../src/mocks/Balance.png');
        break;
    }
    return (
      <View>
        <Image source={screen} style={styles.mock} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mock: {
    width: 375,
    opacity: 20,
    position: 'absolute'
  }
})