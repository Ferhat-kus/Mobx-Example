import { Text, StyleSheet, View,Button } from 'react-native'
import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    const {navigation} = this.props
    return (
      <View>
        <Button title='Kayıt' onPress={() => navigation.navigate('SingUp')}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({})