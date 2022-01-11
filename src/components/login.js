import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

function login({navigation}) {
    
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 115,
            width: 218,
            height: 218,
            alignItems: 'center',
          }}>
          <Image
            style={styles.image}
            source={require('../../public/logo.png')}
          />
        </View>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Kullanıcı Adı"
            placeholderTextColor="#222e37"
            onChangeText={username => setUsername(username)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Şifre"
            placeholderTextColor="#222e37"
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
          />
        </View>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate('Dashboard')}>
          <Text style={styles.loginText}>GİRİŞ YAP</Text>
        </TouchableOpacity>
      </View>
      <Text style={{fontSize: 15}}>Samet Berk Şimşek</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#AAB8C2',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 30,
  },

  imageContainer: {
    width: '100%',
    height: '55%',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: '25%',
  },

  formContainer: {
    width: '100%',
    height: '35%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  inputView: {
    backgroundColor: '#E1E8ED',
    borderRadius: 10,
    width: '70%',
    height: 45,
    marginBottom: 20,

    alignItems: 'flex-start',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 10,
    color: '#222e37',
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: '71%',
    borderRadius: 10,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 34,
    backgroundColor: '#0a2940',
  },
  loginText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default login;