import {
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation';

import Login from './pages/Login';
import Home from './pages/Home';
import Store from './pages/Store';
import StudentPage from './pages/StudentPage';
import Profile from './pages/Profile';
import VideoClasses from './pages/VideoClasses';


const Routes = createAppContainer(
    createSwitchNavigator({
        Home,
        Login,
        Store,
        VideoClasses,
        Profile,
        StudentPage,
        
    })
);

export default Routes; 