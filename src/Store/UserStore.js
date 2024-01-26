import { action, observable, makeObservable } from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';
class authStore {
  @observable auth = {
    data: {
      firstname: '',
      lastname: '',
    },
  };

  constructor() {
    makeObservable(this);
    AsyncStorage.getItem('authData').then((value) => {
      if (value) {
        this.auth.data = JSON.parse(value);
      }
    });
  }

  @action signIn(data) {
    this.auth.data = data; // Store'daki veriyi güncelle
    AsyncStorage.setItem('authData', JSON.stringify(data)); // Veriyi sakla
  }
}

export default new authStore();