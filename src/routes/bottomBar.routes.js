import React from 'react';
import {
  View,
  Text, 
  Image, 
  Button,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../pages/Home';
import Store from '../pages/Store';
import StudentPage from '../pages/StudentPage';
import Profile from '../pages/Profile';
import VideoClasses from '../pages/VideoClasses';
import QrScanner from '../pages/QrScanner';

import logo from '../assets/logoClean.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

const tittlePadding = ()=> {
  if(Platform.OS === 'ios'){
    return 5;
  }else{
    return 14;
  }
}

const HomeStack = createStackNavigator({
  AboutUs: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      headerTitle:()=> <View style={{flex: 1, flexDirection: 'row', paddingTop: tittlePadding()}}><Image source= {logo} style={{height: 30, width: 30}}/><Text style={{color: '#fff', fontSize:20}}> Apcam </Text></View>,
      headerLeft: ()=> <View style= {{paddingLeft: 20}}><TouchableOpacity><Ionicons name={'ios-qr-scanner'} size={30} color="white"/></TouchableOpacity></View>,
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#497242',
      },
    }),
  }
});


const BottomBar = createBottomTabNavigator(
  {
    Início: HomeStack,
    Estudante: StudentPage,
    Aulas: VideoClasses,
    Loja: Store,
    Perfil: Profile,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Início') {
          iconName = 'ios-star-outline';
        } else if (routeName === 'Estudante') {
          iconName = 'ios-book';
        } else if (routeName === 'Aulas') {
          iconName = 'ios-easel';
        } else if (routeName === 'Loja') {
          iconName = 'ios-basket';
        } else if (routeName === 'Perfil') {
          iconName = 'ios-contact';
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#233',
      inactiveTintColor: 'white',
      style: {
        backgroundColor: '#497242',
      },
    },
    
  }
);

export default createAppContainer(BottomBar);