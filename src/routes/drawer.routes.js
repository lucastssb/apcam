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
import {createAppContainer} from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import DrawerHeader from '../assets/drawerHeader.jpg';
import ProfilePic from '../assets/profilePic.jpg';

import Stack from './stack.routes';

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

const MyShoppingStack = createStackNavigator({
  AboutUs: {
    screen: MyShopping,
    navigationOptions: ({ navigation }) => ({
      title: 'Minhas compras',
      //headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#497242',
      },
      headerTintColor: '#fff',
    }),
  }
});

const SettingsStack = createStackNavigator({
  AboutUs: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      title: 'Configurações',
      //headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#497242',
      },
      headerTintColor: '#fff',
    }),
  }
});

const SupportStack = createStackNavigator({
  AboutUs: {
    screen: Support,
    navigationOptions: ({ navigation }) => ({
      title: 'Ajuda',
      //headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#497242',
      },
      headerTintColor: '#fff',
    }),
  }
});

const LogoutStack = createStackNavigator({
  AboutUs: {
    screen: logout,
    navigationOptions: ({ navigation }) => ({
      title: 'Logout',
      //headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#497242',
      },
      headerTintColor: '#fff',
    }),
  }
});

const AboutUsStack = createStackNavigator({
  AboutUs: {
    screen: AboutUs,
    navigationOptions: ({ navigation }) => ({
      title: 'Quem somos',
      //headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#497242',
      },
      headerTintColor: '#fff',
    }),
  }
});

const MilitaryAcademiesStack = createStackNavigator({
  AboutUs: {
    screen: MilitaryAcademies,
    navigationOptions: ({ navigation }) => ({
      title: 'Academias militares',
      //headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#497242',
      },
      headerTintColor: '#fff',
    }),
  }
});

const PolesStack = createStackNavigator({
  AboutUs: {
    screen: Poles,
    navigationOptions: ({ navigation }) => ({
      title: 'Nossos polos',
      //headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#497242',
      },
      headerTintColor: '#fff',
    }),
  }
});

const SiteStack = createStackNavigator({
  AboutUs: {
    screen: site,
    navigationOptions: ({ navigation }) => ({
      title: '',
      //headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#497242',
      },
      headerTintColor: '#fff',
    }),
  }
});

const CustomDrawerContent = props => {
  return(
    <View style= {styles.container}> 
    <StatusBar backgroundColor="transparent" barStyle="light-content" translucent= {true}/>
      <ImageBackground source={DrawerHeader} style= {styles.drawerHeaderBackground}>
        <View style= {styles.profileHeader}>
          <Image style= {styles.profilePicture} source= {ProfilePic}/>
          <Text style= {styles.profileName}> Lucas da Silva Barbosa</Text>
        </View>
      </ImageBackground>
    <DrawerItems {...props} />
    </View>

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
        screen: MyShoppingStack,
        navigationOptions: {
          drawerLabel: 'Minhas Compras',
        }
      },
       Configurações: {
        screen: SettingsStack,
        navigationOptions: {
          drawerLabel: 'Configurações',
        }
      },
       Ajuda: {
        screen: SupportStack,
        navigationOptions: {
          drawerLabel: 'Ajuda',
        }
      },
       Logout: {
        screen: LogoutStack,
        navigationOptions: {
          drawerLabel: 'Logout',
        }
      },
       Quemsomos: {
        screen: AboutUsStack,
        navigationOptions: {
          drawerLabel: 'Quem somos',
        }
      },
       Academiasmilitares: {
        screen: MilitaryAcademiesStack,
        navigationOptions: {
          drawerLabel: 'Academias militares',
        }
      },
       Nossospolos: {
        screen: PolesStack,
        navigationOptions: {
          drawerLabel: 'Nossos polos',
        }
      },
       Nossosite: {
        screen: SiteStack,
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
    //width:280,
    height: 163,
  },

  profileHeader: {
    flex:1,
    paddingTop: 40,
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

export default createAppContainer(Drawer) ;
