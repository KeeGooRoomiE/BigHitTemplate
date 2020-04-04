import React, { Component } from 'react';
import { Platform, StyleSheet, View, TextInput } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Grid, Text, Item, Input, Label } from 'native-base';
import { TextInputMask } from 'react-native-masked-text';
import { styles } from "../Styles";

export default class Payment extends Component {
  state = {advanced: ""}
  render() {
    let navigation = this.props.navigation;
    return (
      <Container>
        {/* Sets coloured background */}
        <View style={{ backgroundColor: "#FBE0DC", flex: 2 }}>
          {/* Header inside view due to transparency */}
          <Header transparent>
            <Left>
              <Button transparent onPress={() => navigation.goBack()}>
                <Icon name='arrow-back' style={styles.backButton} />
              </Button>
            </Left>
            <Body>
              <Title>Payment</Title>
            </Body>
            <Right />
          </Header>
          {/* End of header */}
          {/* Amount text sended to view due to margin and style contents */}
          <View style={{ justifyContent: "center", alignItems: "center", marginTop: 16 }}>
            <Text style={{ fontSize: 11 }}>Amount</Text>
          </View>
          <View style={{ marginVertical: 16, justifyContent: "center", alignItems: "center" }}>
            {/* Later fix margin, check App TODO */}
            <TextInputMask
              type={'money'}
              options={{
                precision: 2,
                separator: '.',
                delimiter: ' ',
                unit: '$ '
              }}
              value={this.state.advanced}
              onChangeText={text => {
                this.setState({
                  advanced: text
                })
              }}
              placeholder="$ 20.00" style={{ fontSize: 36, alignSelf: "center" }}
            />
          </View>
        </View>
        {/* End of coloured block */}
        {/* Info status block */}
        <View style={{ flex: 4, backgroundColor: "#fff" }}>
          {/* Text */}
          <View style={{ marginVertical: 32, justifyContent: "center", alignItems: "flex-start", marginHorizontal: 32 }}>
            <Text style={{ color: "#000" }}>Payment method</Text>
          </View>
          {/* Is there a card of button? Fix later on */}
          <View style={{ marginHorizontal: 32 }}>
            {/* Bank card button */}
            <Button iconLeft style={{ justifyContent: "flex-start", alignItems: "flex-start", backgroundColor: "#f6f6f6", height: 48 }} onPress={() => navigation.navigate('BankCard')}>
              <View style={{ justifyContent: "center", alignItems: "flex-start" }}>
                <Grid>
                  <Icon name="card" style={{ color: "#000", alignSelf: "center", marginHorizontal: 16 }} />
                  <Text style={{ fontSize: 11, color: "#000", alignSelf: "center" }}>Bank card</Text>
                </Grid>
              </View>
            </Button>
            {/* Apple pay button */}
            <Button iconLeft style={{ justifyContent: "flex-start", alignItems: "flex-start", backgroundColor: "#f6f6f6", height: 48, marginVertical: 8 }}>
              <View style={{ justifyContent: "center", alignItems: "flex-start" }}>
                <Grid>
                  <Icon name="logo-apple" style={{ color: "#000", alignSelf: "center", marginHorizontal: 16 }} />
                  <Text style={{ fontSize: 11, color: "#000", alignSelf: "center" }}>Apple pay</Text>
                </Grid>
              </View>
            </Button>
          </View>
          {/* Pay button */}
          <View style={{ marginVertical: 16, marginHorizontal: 32, marginBottom: 48 }}>
            <Button style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#8459FF", height: 58 }}>
              <Text style={{ fontSize: 11 }}>To pay</Text>
            </Button>
          </View>
        </View>
      </Container>
    );
  }
}