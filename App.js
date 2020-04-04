import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import PHistory from './screens/PHistory';
import Balance from './screens/Balance';
import Payment from './screens/Payment';
import BankCard from './screens/BankCard';

// TODO: Refactor PHistory screen
// !DONE! Refactor Balance screen
// !DONE! Set styles and components to divided customElements
// !DONE! Make button transitions to navigate between screens
// !DONE! End Balance screen
// !DONE!End Payment screen
// !DONE! Start BankCard screen
// !DONE! Start PSuccess screen  -> Moved to modal in BankCard
// Set SVGView element
// Refactor style to pixel-perfect to mocks
// Fix tip text in InfoCard
// !DONE! Fix video icon in InfoCard 
// !DONE! Fix margin in Payment screen

// WANTS:
// Make number counting on balance screen under the smiles svg elements
// Make animation through pink layout 
// End refactoring screen styles
// !DONE! Make MockComponent to screens to easy develop UI
// !DONE! Set divider components

// REFERENCE:
// Icon List: https://oblador.github.io/react-native-vector-icons/

const Stack = createStackNavigator();



export default class App extends Component {

  componentDidMount() {
    Font.loadAsync({
      'poppins-semi-bold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    });
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Balance" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Balance" component={Balance} />
          <Stack.Screen name="PHistory" component={PHistory} />
          <Stack.Screen name="Payment" component={Payment} />
          <Stack.Screen name="BankCard" component={BankCard} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
