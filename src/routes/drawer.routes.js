import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,

} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import BottomBar from './bottomBar.routes';
import DrawerHeader from '../assets/drawerHeader.jpg';
import ProfilePic from '../assets/profilePic.jpg';


const CustomDrawerContent = props => {
  return(
    <SafeAreaView style= {styles.container}> 
      <ImageBackground source={DrawerHeader} style= {styles.drawerHeader}>
        <View style= {styles.profileHeader}>
          <Image style= {styles.profilePicture} source= {ProfilePic}/>
          <Text style= {styles.profileName}> Lucas da Silva Barbosa</Text>
        </View>
      </ImageBackground>
    <DrawerItems {...props} />
    </SafeAreaView>

  );
};

const Drawer = createDrawerNavigator(
    {
       Início: BottomBar,
    },
    {
       contentComponent: CustomDrawerContent,
    },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    width:280,
    height: 150,
    marginBottom: 10,
  },

  profileName: {
    alignSelf: 'center',
    color: '#fff',
    marginTop: 10,
  },

  drawerHeader: {
    width:280,
    height: 150,
  },

  profileHeader: {
    
  },

  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 10,
  }

});

export default Drawer;
