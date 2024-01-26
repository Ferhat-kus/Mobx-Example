import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import authStore from '../../Store/UserStore'; // Yolu uygun şekilde ayarlayın

class UserProfile extends Component {
  state = {
    firstname: '',
    lastname: '',
  };

  componentDidMount() {
    const { data } = authStore.auth;
    this.setState({
      firstname: data.firstname,
      lastname: data.lastname,
    });
  }
  handleSaveProfile = () => {
    const { firstname, lastname } = this.state;
    authStore.signIn({ firstname, lastname }); // authStore'daki signIn metodunu çağırın
    this.props.navigation.navigate('SingIn');
  };

  render() {
    const { firstname, lastname } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={firstname}
          onChangeText={(text) => this.setState({ firstname: text })}
          placeholder="Adınızı girin"
        />
        <TextInput
          style={styles.input}
          value={lastname}
          onChangeText={(text) => this.setState({ lastname: text })}
          placeholder="Soyadınızı girin"
        />
        <Button title="Profil Kaydet" onPress={this.handleSaveProfile} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '90%',
    backgroundColor: 'lightgray',
    marginVertical: 10,
    padding: 10,
  },
});

export default UserProfile;
