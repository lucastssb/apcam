import { createDrawerNavigator } from 'react-navigation-drawer';
import BottomBar from './bottomBar.routes';
import Login from '../pages/Login';

const Drawer = createDrawerNavigator(
    {
        Home: { screen: BottomBar },
      },
      {
        initialRouteName: 'Home',  
        drawerBackgroundColor: 'rgba(255,255,255,.9)',
        contentOptions: {
        activeTintColor: '#fff',
        activeBackgroundColor: '#6b52ae',
        },
      },

);

export default Drawer;
