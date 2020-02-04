import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  StatusBar

} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';

import DrawerHeader from '../assets/drawerHeader.jpg';
import ProfilePic from '../assets/profilePic.jpg';

import BottomBar from './bottomBar.routes';
import MyShopping from '../pages/MyShopping';
import Settings from '../pages/Settings';
import Support from '../pages/Support';
import AboutUs from '../pages/AboutUs';
import MilitaryAcademies from '../pages/MilitaryAcademies';
import Poles from '../pages/Poles';

function logout(params) {
  
}

function site(params) {
  
}


const CustomDrawerContent = props => {
  return(
    <SafeAreaView style= {styles.container}> 
    <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent= {true}/>
      <ImageBackground source={DrawerHeader} style= {styles.drawerHeaderBackground}>
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
       Início: {
         screen: BottomBar,
         navigationOptions: {
           drawerLabel: 'Início',
         }
       },
       MinhasCompras: {
        screen: MyShopping,
        navigationOptions: {
          drawerLabel: 'Minhas Compras',
        }
      },
       Configurações: {
        screen: Settings,
        navigationOptions: {
          drawerLabel: 'Configurações',
        }
      },
       Ajuda: {
        screen: Support,
        navigationOptions: {
          drawerLabel: 'Ajuda',
        }
      },
       Logout: {
        screen: logout,
        navigationOptions: {
          drawerLabel: 'Logout',
        }
      },
       Quemsomos: {
        screen: AboutUs,
        navigationOptions: {
          drawerLabel: 'Quem somos',
        }
      },
       Academiasmilitares: {
        screen: MilitaryAcademies,
        navigationOptions: {
          drawerLabel: 'Academias militares',
        }
      },
       Nossospolos: {
        screen: Poles,
        navigationOptions: {
          drawerLabel: 'Nossos polos',
        }
      },
       Nossosite: {
        screen: site,
        navigationOptions: {
          drawerLabel: 'Nossos site',
        }
      },

    },
    {
     contentComponent: CustomDrawerContent,
       contentOptions: {
          activeTintColor: 'white',
          activeBackgroundColor: '#aaa',
            itemsContainerStyle: {
              marginVertical: 0,
            },
            iconContainerStyle: {
              opacity: 1
            },

        }
    },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  drawerHeaderBackground: {
    width:280,
    height: 120,
  },

  profileHeader: {
    flex:1,
  },

  profileName: {
    alignSelf: 'center',
    color: '#fff',
    marginTop: 10,
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
