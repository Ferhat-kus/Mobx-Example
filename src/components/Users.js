import { Text, StyleSheet, View,Button } from 'react-native'
import React, { Component } from 'react'
import { observer } from 'mobx-react';
import UsersStore from '../Store/UserStore'



@observer
export default class Users extends Component {
  render() {
    return (
        <View>
        <Button 
        title='Ferhat'
        onPress={() => UsersStore.fetchUsers()}
        />
        <View>
            {UsersStore.users && UsersStore.users.map((user, key) => (
                <View key={key}>
                    <Text>{user.name.first}</Text>
                </View>
            ))}
        </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({})