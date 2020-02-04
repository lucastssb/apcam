import {
    createAppContainer,
    createSwitchNavigator,
    
} from 'react-navigation';

import Login from './pages/Login';
import Drawer from './routes/drawer.routes';


const Routes = createAppContainer(
    createSwitchNavigator({
        Drawer,
        Login,  
    },)
);

export default Routes; 