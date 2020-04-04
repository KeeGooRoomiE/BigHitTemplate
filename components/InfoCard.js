import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Grid, Left, Right, Icon, Text, Body, Button } from 'native-base';

//Ready component, heheh

// ARGUMENTS: 
// bool isPhoto = {true,false} checks for a variation of a component to see if need to show a photo\video variant of component
// string contentCount = {number,string} Sends number to text in first line of component

export default class InfoCard extends Component {

  render() {
    let contentTrigger = this.props.isPhoto;
    let counter = this.props.contentCount;
    return (
      // Creates card element
      <View style={{ marginVertical: 32 }}>
        {/* Division card by lines */}
        <View style={{ marginBottom: 16 }}>
          {/* Combine both sides to one line */}
          <Grid style={{ marginHorizontal: 32 }}>
            {/* Left side content: Icon and Counter */}
            <Left style={styles.leftContainer}>
              {/* Makes column view */}
              <Grid style={styles.centerify}>
                {/* Sees what icon need to add */}
                {contentTrigger ? 
                <Icon name='ios-camera' style={styles.icon} /> : 
                <Icon name='ios-videocam' style={styles.icon} />}
                {/* Renders text */}
                <Text style={styles.commonText}>{counter} {contentTrigger ? "Photos" : "Videos"}</Text>
              </Grid>
              {/* Later fix This , added to TODO in App
              {contentTrigger ? <></> : <Text style={styles.tip}>Chrono = 12 minutes</Text>} */}
            </Left>
            <Body />
            {/* Right side content: rounded button */}
            <Right>
              <Button rounded style={styles.gray}>
                <Text style={styles.smallText}>
                  see all
                </Text>
              </Button>
            </Right>
          </Grid>
        </View>
        {/* Second line of card */}
        <View style={styles.leftCentering}>
          <Grid>
            {/* Checking for proper text render  */}
            {contentTrigger ? 
            <Text style={styles.smallText}>{"Storage cost: 1 photo = "}</Text> : 
            <Text style={styles.smallText}>{"Every 1 second = "}</Text>}
            {/* Checking for proper price render */}
            {contentTrigger ? 
            <Text style={styles.smallPurpleText}>0,03$ / month</Text> :
            <Text style={styles.smallPurpleText}>0,01$ / month</Text>}
          </Grid>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    color: "#8459FF",
    padding: 16
  },
  commonText: {
    color: "#000",
    fontSize: 18
  },
  midText: {
    color: "#000",
    fontSize: 18
  },
  smallText: {
    color: "#000",
    fontSize: 11
  },
  tip: {
    color: "#878787",
    fontSize: 10
  },
  smallPurpleText: {
    color: "#8459ff",
    fontSize: 11
  },
  centerify: {
    justifyContent: "center",
    alignItems: "center"
  },
  leftCentering: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginHorizontal: 32
  },
  leftContainer: {
    marginLeft: 16,
    justifyContent: "center",
    alignItems: "center"
  },
  gray: {
    backgroundColor: "#F8F8F7"
  },
})