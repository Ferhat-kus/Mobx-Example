import {Text, View } from 'react-native'
import React, { Component } from 'react'
import BottomTabs from './src/router/BottomTabs'
import Navigation from './src/router/Navigation'

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1,}}>
        <Navigation/>
      </View>
    )
  }
}

