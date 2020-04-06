import {
    createAppContainer,
    createSwitchNavigator,
    
} from 'react-navigation';

import Login from './pages/Login_';
import Drawer from './routes/drawer.routes';


const Routes = createAppContainer(
    createSwitchNavigator({
        Login, 
        Drawer, 
    },)
);

export default Routes; 