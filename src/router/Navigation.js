import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


import Home from '../pages/Home'
import SingIn from '../pages/SingIn/Index'
import SingUp from '../pages/SingUp/Index'
import BottomTabs from './BottomTabs'


export default class Navigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SingIn" component={SingIn} />
          <Stack.Screen name="SingUp" component={SingUp} />
          <Stack.Screen name="BottomTabs" options={{ headerShown: false }}component={BottomTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({})