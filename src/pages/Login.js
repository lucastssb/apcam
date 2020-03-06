import React, { Component } from 'react';
 
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';

import Reactotron from 'reactotron-react-native';


import PropTypes from 'prop-types';
import { SwitchActions , NavigationActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import api from '../services/api';

import LoginBackground from '../assets/LoginBackground.jpg';
import logo from '../assets/logoo.png';

export default class Login extends Component {

static propTypes = {
        navigation: PropTypes.shape({
          navigate: PropTypes.func,
          dispatch: PropTypes.func,
        }).isRequired,
      };

state = { email: '', password: '', error: ''};

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
           
        const response = await api.post('/painel/public/oauth/token', {
          username: this.state.email,
          password: this.state.password,
          grant_type:"password",
          client_id:2,
          client_secret:"NMpBrwHLD8GaSTBURM0qVcqYJw3ErZVMwhefRrFa",
        });
        console.log(this.state.error);  
        Reactotron.log(response.data);
          
        await AsyncStorage.setItem('@ApcamApp:token', response.data.access_token);
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
        return(    
        <ImageBackground source={LoginBackground} 
                style={style.background}>
                
                    <KeyboardAvoidingView enabled= {Platform.OS === 'ios'} behavior= 'padding' style={style.mainContainer}>
                         <Image source={logo} style={style.logo} />            
                         <View style={style.form}>
                             <TextInput 
                             style={style.input} 
                             placeholder= 'Seu E-mail' 
                             value={this.state.email}
                             onChangeText={this.handleEmailChange}
                             placeholderTextColor= '#999'
                             keyboardType= 'email-address'
                             autoCapitalize= 'none'
                             autoCorrect= {false}/>
                             <TextInput style={style.input} 
                             secureTextEntry= {true}
                             value={this.state.password}
                             onChangeText={this.handlePasswordChange} 
                             placeholder= 'Senha' 
                             placeholderTextColor= '#999'/>
                                <TouchableOpacity style={style.button}
                                                   onPress={this.handleSignInPress}>
                                    <Text style={style.buttonText}>Login</Text>
                                </TouchableOpacity> 
                         </View>
                    </KeyboardAvoidingView>
         </ImageBackground>       
    );

  }
}

const style = StyleSheet.create({
    background: {
        flex: 1
    },

    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    logo: {
       height: 250,
       width: 265

       },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#ddd',
        height: 44,
        marginBottom: 20,
        borderRadius: 3
    },

    button: {
        height: 42,
        backgroundColor: '#ddc',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
    }


})