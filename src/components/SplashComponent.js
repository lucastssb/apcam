import React, { Component } from 'react';

import { 
    View,
    Text,
    StyleSheet,
    StatusBar,
    Dimensions,
    ImageBackground,

} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class SplashScreen extends Component {
  render() {
    return (
        <ImageBackground 
            source={require('../assets/LoginBackground.jpg')} 
            style={styles.container}
            blurRadius={0.5}>
            <StatusBar backgroundColor='transparent' translucent={true} barStyle= 'light-content' />
            <View style={styles.header}>
            <Animatable.Image
                animation='zoomIn'
                duration={1500}
                source={require('../assets/logoo.png')}
                style={styles.logo}
                resizeMode={'stretch'}
            />

            </View>
            <Animatable.View 
                style={styles.footer}
                animation='fadeInUpBig'>
                <Text style={styles.tittle}>Bem vindo a Apcam</Text>
                <Text style={styles.text}>A Apcam Brasil é uma instituição de ensino comprometida com a formação de cidadãos que sonham em servir as forças armadas brasileira.</Text>
                <View style={styles.button}>
                    <TouchableOpacity
                        onPress={()=>this.props.navigation.navigate('SignInScreen')}>
                        <LinearGradient 
                            colors={['#497201', '#499942']}
                            style={styles.signIn}>
                                <Text style={styles.textSignIn}>Login</Text>
                                <MaterialIcons 
                                    name='navigate-next' 
                                    size={20}
                                    color='white'
                                />
                            </LinearGradient>
                    </TouchableOpacity>
                </View>
            
            </Animatable.View>
        
        </ImageBackground>
    )
  }
}

const {height} = Dimensions.get('screen');
const height_logo = height * 0.7 * 0.4;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#497242',
    },

    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    footer: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical:50,
        paddingHorizontal:30,
    },
    logo: {
        width: height_logo,
        height: height_logo,

    },

    tittle: {
        color: '#497242',
        fontWeight: 'bold',
        fontSize: 30,
    },

    text: {
        color: 'gray',
        marginTop: 5,
        textAlign: 'justify'
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30,
    },

    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
    },

    textSignIn: {
        color: 'white',
        fontWeight: 'bold',
    }
})