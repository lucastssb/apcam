import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';

import SpotList from '../components/SpotList';
import VideoPlayer from '../components/VideoPlayer';


import Store from '../pages/Store';
import StudentPage from '../pages/StudentPage';
import Profile from '../pages/Profile';
import VideoClasses from '../pages/VideoClasses';
import videoo  from '../assets/video.mp4';



const Home = ({ navigation }) => {
    return(

      

        <ScrollView> 
        
        <View style= {styles.container}>

        <View style= {styles.video}>
        <TouchableHighlight 
            onPress={}
            style= {styles.buttom}>
            
            <Image 
              style= {styles.image}
              source= {require('../assets/logo.png')}
              />
         </TouchableHighlight>

          
        </View>

          <SpotList/>  
        
        </View>
        
        </ScrollView>

        
    )
}

const TabNavigator = createBottomTabNavigator({
  Home: Home,
  StudentPage: StudentPage,
  VideoClasses: VideoClasses,
  Store: Store,
  Profile: Profile,
});

const DrawerNavigator = createDrawerNavigator(
  {
    Home: Home,
    
  },
  {
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
  }
);

export default createAppContainer(  TabNavigator);



const styles =  StyleSheet.create({
    container: {
        marginTop: 30
    },

    video: {
      marginTop: 30
    },

    

    
})