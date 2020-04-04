import React, { Component } from "react";
import { StyleSheet, Image} from "react-native";
import { Left, Right, Icon, Text } from 'native-base';

//Ready component, heheh

// ARGUMENTS: 
// bool isPaid = {true,false} checks for a variation of a component to see if need to show a paid\expiring variant of component
// string contentCount = {number,string} Sends number to text in first line of component

export default class ColumnItem extends Component {

    render() {
        let contentTrigger = this.props.isPaid;
        let counter = this.props.contentCount;
        const SmilePaid = require('../assets/images/SmilePaid.png');
        const SmileExpired = require('../assets/images/SmileExpiring.png');
        // Cant refactor more bkz of <Left> \ <Right> header tags
        return (
            contentTrigger ? <Right style={styles.columnR}>
                {/* Component for paid column */}
                {/* Icon is placeholder for svg icon */}
                {/* <Icon name="ios-checkmark" style={styles.iconGood} /> */}
                <Image source={SmilePaid} style={styles.iconGood} />
                <Text style={styles.countText}>{counter}</Text>
                <Text style={styles.infoText}>paid</Text>
            </Right>
                :
                <Left style={styles.columnL}>
                    {/* Component for expiring column */}
                    {/* Icon is placeholder for svg icon */}
                    {/* <Icon name="ios-close" style={styles.iconBad} /> */}
                    <Image source={SmileExpired} style={styles.iconGood} />
                    <Text style={styles.countText}>{counter}</Text>
                    <Text style={styles.infoText}>expiring</Text>
                </Left>
        );
    }
}

const styles = StyleSheet.create({
    columnL: {
        marginLeft: 32,
        marginTop: 32,
        justifyContent: "center",
        alignItems: "center"
    },
    columnR: {
        marginRight: 32,
        marginTop: 32,
        justifyContent: "center",
        alignItems: "center"
    },
    countText: {
        color: "#000",
        fontSize: 18,
        marginVertical: 8
    },
    infoText: {
        color: "#000",
        fontSize: 11,
        marginBottom: 32
    },
    iconGood: {
        marginBottom: 24,
        // color: "#89D895",
    },
    iconBad: {
        marginBottom: 24,
        color: "#FF6767",
    }
})