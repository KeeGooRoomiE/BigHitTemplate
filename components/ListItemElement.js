import React, { Component } from 'react';
import { Left, Body, Right, ListItem, Text, Grid, } from 'native-base';
import { styles } from "../Styles";
import { DebugInstructions } from 'react-native/Libraries/NewAppScreen';

// Ready component, nah
// Use and dont forget about margin: 32 

export default class ListItemElement extends Component {
  render() {
    let date = this.props.date;
    let amount = this.props.amount;
    let isBalancePositive = this.props.balancePos;
    let StId = this.props.StorageId;

    return (
      // style... dunno, magic fix of standart component
      <ListItem style={{ width: "100%", marginLeft: "0%" }}>
        <Left style={{ flex: 1, margin: "2%", marginLeft: "2%" }}>
          {/* Date text  */}
          <Text>{date}</Text>
        </Left>
        {/* Change behavior to positive variation */}
        {isBalancePositive ?
          <Body style={{ flex: 2, alignItems: "left" }}>
            <Text style={{ alignSelf: "flex-start" }}>Balance replenishment</Text>
          </Body> :
          // And negative variation 
          <Body style={{ flex: 2, alignItems: "left" }}>
            {/* is text should be one lined? ask later */}
              <Text>Storage: ID </Text>
              <Text style={{ fontFamily: "poppins-semi-bold" }}>{StId}</Text>
              <Text> for 3 months</Text>
          </Body>}
          {/* Amount text  */}
        <Right style={{ flex: 1 }}>
          {isBalancePositive ? <Text style={{ color: "#8459FF" }}>+ {amount} $</Text> : <Text style={{ color: "#FF2C2C" }}>- {amount} $</Text>}
        </Right>
      </ListItem>
    );
  }
}