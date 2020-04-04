import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image } from 'react-native';
import { Container, Header, Left, Body, Right, ListItem, Text} from 'native-base';

// TODO: 
// Add arguments and send to PHistory as ListItem 

export default function PayListItem(date,operation,amount,isPositive) {

    <ListItem style={{ width: "100%", marginLeft: "0%" }}>
    <Left style={{ flex: 1, margin: "2%", marginLeft: "2%" }}>
      <Text>{date}</Text> 
      {/* date variable from arguments */}
    </Left>
    <Body style={{ flex: 2, alignItems: "left" }}>
      <Text style={{ alignSelf: "flex-start" }}>{operation}</Text>
      {/* operation variable from arguments */}
    </Body>
    <Right style={{ flex: 1 }}>
        
      <Text style={{ color: "#8459FF" }}>{amount}</Text>
    </Right>
  </ListItem>
    
}
