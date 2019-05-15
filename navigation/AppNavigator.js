import React from 'react';
import {  createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen1 from '../screens/HomeScreen1'
import HomeScreen from '../screens/HomeScreen'


//here is where all views are registred and later switched with 
//   onPress={() => this.props.navigation.navigate('HomeScreen')}
const RootStack = createStackNavigator(
  {
     
    HomeScreen: HomeScreen,
    HomeScreen1: HomeScreen1,
      
  },
  {
      initialRouteName: 'HomeScreen',
  },
 
);

const AppContainer = createAppContainer(RootStack);

export default createAppContainer(
  AppContainer
 /* 
  createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  
     
    HomeScreen: HomeScreen,
    HomeScreen1: HomeScreen1,
    Main: MainTabNavigator,
      
  },
  {
      initialRouteName: 'Main',

})
*/

);