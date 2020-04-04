import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Grid, Text, Segment } from 'native-base';
import {styles} from "../Styles";

import HorizontalDivider from '../components/HorizontalDivider';
import VerticalDivider from '../components/VerticalDivider';
import InfoCard from '../components/InfoCard';
import ColumnItem from '../components/ColumnItem';

export default class PHistory extends Component {
  state = {}
  
  render() {
    // Sended to variable due to next changes
    let balanceValue = "19,38";
    let navigation = this.props.navigation;
    return (
      <Container>
        <Content>
          {/* Sets coloured background */}
          <View style={styles.pinkLayout}>
            {/* Header inside view due to transparency */}
            <Header transparent>
              <Left>
                <Button transparent>
                  <Icon name='arrow-back' style={styles.backButton} />
                </Button>
              </Left>
              <Body>
                <Title>Balance</Title>
              </Body>
              <Right />
            </Header>
            {/* End of header */}
            <View style={styles.headerBigLine}>
              <Text style={styles.bigText}>${balanceValue}</Text>
            </View>
            {/* Add funts button */}
            <View style={styles.headerLine}>
              <Button iconLeft rounded style={styles.whiteBkg} onPress={() => navigation.navigate('Payment')}>
                <Icon name='add-circle' style={styles.black} />
                <Text style={styles.blackText}>add funts</Text>
              </Button>
            </View>
            {/* Payment history button */}
            <View style={styles.headerLine}>
              <Button transparent onPress={() => navigation.navigate('PHistory')}>
                <Text style={styles.blackText}>Payment history</Text>
              </Button>
            </View>
          </View>
          {/* End of coloured block */}
          {/* Info status block */}
          <View style={styles.whiteLayout}>
            <View style={styles.loneText}>
              <Text style={styles.blackText}>Photo and video payment status</Text>
            </View>
            <Grid>
              {/* Expiring column */}
              <ColumnItem isPaid={false} contentCount={128}/>
              {/* Divider */}
              <VerticalDivider />
              {/* Paid column */}
              <ColumnItem isPaid={true} contentCount={389}/>
            </Grid>
          </View>
          {/* Gray box component */}
          <View style={{ marginVertical: 32 }}>
            <View style={styles.grayBox}>
              {/* View for text */}
              <View style={styles.loneText}>
                <Text style={{ fontSize: 11 }}>Authomatic renew for all - 1 hour prior expiration</Text>
              </View>
              {/* Button switcher component */}
              <View>
                <Segment>
                  <Button first active style={styles.segmentButton}><Text>ON</Text></Button>
                  <Button last style={styles.segmentButton}><Text>OFF</Text></Button>
                </Segment>
              </View>
            </View>
          </View>
          {/* Horizontal divider */}
          <HorizontalDivider />
          {/* Photo component */}
          <InfoCard isPhoto={true} contentCount={378} />
          {/* Horizontal divider */}
          <HorizontalDivider />
          {/* Video component */}
          <InfoCard isPhoto={false} contentCount={78} />
          {/* Horizontal divider */}
          <HorizontalDivider />
          {/* Pay button */}
          <View style={{ marginVertical: 16, marginHorizontal: 32, marginBottom: 48 }}>
            <Button style={styles.singleButton}>
              <Text style={{ fontSize: 11 }}>Pay for all</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
