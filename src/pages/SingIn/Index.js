import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import authStore from '../../Store/UserStore'

export default class SignIn extends Component {
  render() {
    return (
      <View style={{alignItems:'center',justifyContent:'center',flex:1,}}>
        <Text style={{fontSize:60,color:'red',}}>{authStore.auth.data.firstname}-{authStore.auth.data.lastname}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})