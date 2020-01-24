import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from '../pages/Home';
import Store from '../pages/Store';
import StudentPage from '../pages/StudentPage';
import Profile from '../pages/Profile';
import VideoClasses from '../pages/VideoClasses';

const BottomBar = createBottomTabNavigator({
    Início: Home,
    Estudante: StudentPage,
    Aulas: VideoClasses,
    Loja: Store,
    Perfil: Profile,
  },{
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'white',
      labelStyle: {
        fontSize: 15,
      },
      
      style: {
        backgroundColor: '#497242',
      },
    }
  });

export default BottomBar;