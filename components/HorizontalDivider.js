import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

// Ready component, nah
// Use and dont forget about margin: 32 

export default class HorizontalDivider extends Component {
  render() {
    return (
      <View style={styles.spacingHor}>
        <View style={styles.horDiv}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  horDiv: {
    width: "100%",
    height: 1,
    backgroundColor: "#f5f5f5"
  },
  spacingHor: {
    marginHorizontal: 32
  }
})