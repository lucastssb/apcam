import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SplashComponent from '../components/SplashComponent';
import SignInComponent from '../components/SignInComponent';
import SignUpComponent from '../components/SignUpComponent';

const Login = createStackNavigator({
    SplashScreen: {
        screen: SplashComponent,
        navigationOptions: {
            headerShown: false,
        }
    },
    SignInScreen: {
        screen: SignInComponent,
        navigationOptions: {
            headerShown: false,
        }
    },
    SignUpScreen: {
        screen: SignUpComponent,
        navigationOptions: {
            headerShown: false,
        }
    }
});

export default createAppContainer(Login);