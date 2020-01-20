import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from '../pages/Home';
import Store from '../pages/Store';
import StudentPage from '../pages/StudentPage';
import Profile from '../pages/Profile';
import VideoClasses from '../pages/VideoClasses';

const BottomBar = createBottomTabNavigator({
    Home: Home,
    StudentPage: StudentPage,
    VideoClasses: VideoClasses,
    Store: Store,
    Profile: Profile,
  });

export default BottomBar;