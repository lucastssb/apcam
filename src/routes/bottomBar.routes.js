import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from '../pages/Home';
import Store from '../pages/Store';
import StudentPage from '../pages/StudentPage';
import Profile from '../pages/Profile';
import VideoClasses from '../pages/VideoClasses';

export default createBottomTabNavigator(
  {
    Início: Home,
    Estudante: StudentPage,
    Aulas: VideoClasses,
    Loja: Store,
    Perfil: Profile,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
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
      activeTintColor: 'black',
      inactiveTintColor: 'white',
      style: {
        backgroundColor: '#497242',
      },
    },
    
  }
);