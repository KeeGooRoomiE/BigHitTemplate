import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

//Ready component
//Dont forget about no margin

export default class VerticalDivider extends Component {
  render() {
    return (
      <View style={styles.verDiv}></View>
    );
  }
}

const styles = StyleSheet.create({
  verDiv: {
    width: 1,
    height: "100%",
    backgroundColor: "#f5f5f5"
  }
})