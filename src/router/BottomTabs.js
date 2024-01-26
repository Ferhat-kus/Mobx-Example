import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'

const Tab = createBottomTabNavigator();

import Home from '../pages/Home'
import SingIn from '../pages/SingIn/Index'
import SingUp from '../pages/SingUp/Index'

export default class BottomTabs extends Component {
    render() {
        return (
                <Tab.Navigator>
                    <Tab.Screen name="SingIn" component={SingIn} />
                    <Tab.Screen name="SingUp" component={SingUp} />
                </Tab.Navigator>
        )
    }
}

const styles = StyleSheet.create({})