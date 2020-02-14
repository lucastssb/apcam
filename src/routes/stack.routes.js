import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import MyShopping from '../pages/MyShopping';
import Settings from '../pages/Settings';
import Support from '../pages/Support';
import AboutUs from '../pages/AboutUs';
import MilitaryAcademies from '../pages/MilitaryAcademies';
import Poles from '../pages/Poles';

const Stack = createAppContainer(
    createStackNavigator({
        MyShopping: {
            screen: MyShopping,
            navigationOptions: ({ navigation }) => ({
                title: 'Demo Screen 1',
                headerStyle: {
                  backgroundColor: '#FF9800',
                },
                headerTintColor: '#fff',
              }),
        }
    })
);

export default Stack;