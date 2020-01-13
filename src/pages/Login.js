import React from 'react';
 
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    Platform
} from 'react-native';

import LoginBackground from '../assets/LoginBackground.jpg';
import logoo from '../assets/logoo.png';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default function Login() {
    return(
        <ImageBackground source={LoginBackground} 
                style={style.background}>

                    <KeyboardAvoidingView enabled= {Platform.OS === 'ios'} behavior= 'padding' style={style.mainContainer}>
                         <Image source={logoo} style={style.logo} />
                         <View style={style.form}>
                             <TextInput 
                             style={style.input} 
                             placeholder= 'Seu E-mail' 
                             placeholderTextColor= '#999'/>
                             <TextInput style={style.input} 
                             secureTextEntry= {true} 
                             placeholder= 'Senha' 
                             placeholderTextColor= '#999'/>
                             <TouchableOpacity style={style.button}>
                                 <Text style={style.buttonText}>Login</Text>
                             </TouchableOpacity>
                         </View>
                    </KeyboardAvoidingView>
         </ImageBackground>

        
    );
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
        color: '#444',
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