import React, { Component } from 'react';
import { View, ImageBackground, Modal, TouchableHighlight, Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import { TextInputMask } from 'react-native-masked-text';
import { styles } from "../Styles";


// TODO: Refactor this screen later!

export default class BankCard extends Component {

  // saved values
  state = {
    creditCard: "",
    cvc: "",
    date: "",
    modalVisible: false
  }

  // trigger func 
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {

    let navigation = this.props.navigation;
    const BankCardImage = require('../assets/images/BankCardImage.png');

    return (
      <Container>
        {/* Modal Component */}
        <Modal animationType="fade" transparent={false} visible={this.state.modalVisible}>
          <View style={{ flex: 1, backgroundColor: "#000000f3" }}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              {/* Checkmark and text  */}
              <Image source={require('../assets/images/RoundedCheckmark.png')} style={{ marginTop: 72 }} />
              <Text style={{ color: "#fff", fontSize: 20, marginVertical: 32 }}>Successful</Text>
            </View>
            <View style={{ marginTop: 64 }}>
              {/* Pay button */}
              <View style={{ marginVertical: 16, marginHorizontal: 32, marginBottom: 48 }}>
                <Button style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#8459FF", height: 58 }}
                  onPress={() => { this.setModalVisible(!this.state.modalVisible) }}>
                  <Text style={{ fontSize: 11 }}>Close</Text>
                </Button>
              </View>
            </View>
          </View>
        </Modal>

        {/* Sets white background */}
        <View style={{ flex: 1 }}>
          {/* Header inside view due to transparency */}
          <Header transparent>
            <Left>
              <Button transparent onPress={() => navigation.goBack()}>
                <Icon name='arrow-back' style={styles.backButton} />
              </Button>
            </Left>
            <Body>
              <Title>Bank Card</Title>
            </Body>
            <Right />
          </Header>
        </View>
        {/* Card Image */}
        <View style={{ flex: 5 }} >
          <ImageBackground source={BankCardImage} style={{ width: 320, height: 280 }}>

            <TextInputMask
              type={'credit-card'}
              options={{ obfuscated: false, issuer: 'visa-or-mastercard' }}
              value={this.state.creditCard}
              onChangeText={text => {
                this.setState({
                  creditCard: text
                })
              }}
              placeholder="7508 9856 7243 1234"
              style={{ fontSize: 24, marginHorizontal: 16, marginVertical: 76, letterSpacing: 4 }}
            />
            <TextInputMask
              type={'custom'}
              options={{
                mask: '99 / 99'
              }}
              value={this.state.date}
              onChangeText={text => {
                this.setState({
                  date: text
                })
              }}
              placeholder="12/25"
              style={{ fontSize: 24, marginLeft: 148, marginVertical: -8, letterSpacing: 2 }}
            />
            <TextInputMask
              type={'custom'}
              options={{
                mask: '999'
              }}
              value={this.state.cvc}
              onChangeText={text => {
                this.setState({
                  cvc: text
                })
              }}
              placeholder="666"
              style={{ fontSize: 24, marginLeft: 240, marginVertical: -16, letterSpacing: 2 }}
            />

          </ImageBackground>

          {/* Pay button */}
          <View style={{ marginHorizontal: 32, marginBottom: 48 }}>
            <Button style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#8459FF", height: 58 }} onPress={() => {
              this.setModalVisible(true);
            }}>
              <Text style={{ fontSize: 11 }}>To pay</Text>
            </Button>
          </View>
        </View>
      </Container>
    );
  }
}