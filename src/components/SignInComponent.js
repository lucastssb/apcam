import React, { Component } from 'react';

import { 
  View,
  StyleSheet,
  Text,
  Platform,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';

import Reactotron from 'reactotron-react-native';

import api from '../services/api';

import * as Animatable from 'react-native-animatable';
import JwtDecode from 'jwt-decode';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
//import Lottie from 'lottie-react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

export default class SignInComponent extends Component {

  state = {email: '', password: '', error: ''};

  handleEmailChange = (email) => {
      this.setState({ email });
  };
  
  handlePasswordChange = (password) => {
      this.setState({password});
  };

  
  handleSignInPress = async () => {
      if (this.state.email.length === 0 || this.state.password.length === 0) {
        this.setState({ error: 'Preencha usuário e senha para continuar!' }, () => false);
      } else {
        try { 
          const response = await api.post('/desenv/public/oauth/token', {
            username: this.state.email,
            password: this.state.password,
            grant_type:"password",
            client_id:2,
            client_secret:"YgaD1vE5ixx7QgmpMTvVdjlUS7rmujQmRwOK3YIe",
          });
          console.log(this.state.error);
          Reactotron.log(response.data);
          let decoded = JwtDecode(response.data.access_token);
          console.log(decoded.id);
            
          await AsyncStorage.setItem('@ApcamApp:token', response.data.access_token);
          await AsyncStorage.setItem('@ApcamApp:userId', (decoded.id).toString());
          console.log(response.data.access_token);
        
          const navigateAction = NavigationActions.navigate({
            routeName: 'Drawer',
            params: {},
            action: NavigationActions.navigate({ routeName: 'Drawer' }),
          });
          
          this.props.navigation.dispatch(navigateAction);
          
        } catch (_err) {
          this.setState({ error: 'Houve um problema com o login, verifique suas credenciais!' });
        }
      }
    };

  render() {
    return (
      <View style={styles.container}>
      <StatusBar  backgroundColor='transparent' translucent={true} barStyle="light-content" />
        <View style={styles.header}>
          <Animatable.Text
            style={styles.textHeader}
            animation='slideInLeft'
            >Login</Animatable.Text>
            <Animatable.Image 
              source={require('../assets/logoClean.png')}
              style={styles.logo}
              animation='slideInRight'
            />
        </View>
        <View style={styles.footer}>
          <KeyboardAvoidingView enabled= {Platform.OS === 'ios'} behavior= 'padding' style={styles.mainContainer}>        
            <Text style={styles.textFooter}>Email</Text>
            <View style={styles.action}>
              <FontAwesome
                name='user-o'
                color='#497242'
                size={20}
              />
              <TextInput
                placeholder='Seu email...'
                style={styles.textInput}
                value={this.state.email}
                onChangeText={this.handleEmailChange}
                keyboardType= 'email-address'
                autoCapitalize= 'none'
                autoCorrect= {false}
              />
              <Feather
                name='check-circle'
                color='#499912'
                size={20}
              />
            </View>
            
            <Text style={[styles.textFooter,{marginTop: 35}]}>Senha</Text>
            <View style={styles.action}>
              <FontAwesome
                name='lock'
                color='#497242'
                size={20}
              />
              <TextInput
                placeholder='Sua Senha...'
                style={styles.textInput}
                secureTextEntry= {true}
                value={this.state.password}
                onChangeText={this.handlePasswordChange}
                placeholder= 'Senha'
              />
              <Feather
                name='eye-off'
                color='gray'
                size={20}
              />
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                style={styles.touchButton}
                onPress={this.handleSignInPress}>
                <LinearGradient 
                  colors={['#497201', '#499942']}
                  style={styles.signIn}>
                      <Text style={styles.textSignIn}>Login</Text>
                </LinearGradient>
              </TouchableOpacity>
              </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#497242',
  },

  header: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },

  logo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },

  footer: {
    flex: 3,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

  textHeader: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 60,
  },

  textFooter: {
    color: '#497242',
    fontSize: 20,
  },

  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },

  textInput: {
    flex:1,
    paddingLeft: 10,
    color: '#497242',
  },

  button: {
    alignItems: 'center',
    marginTop: 50
  },

  signIn: {
    width: 380,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  textSignIn: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },

  touchButton: {
    
  }
})
