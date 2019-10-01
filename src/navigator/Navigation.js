import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './../page/login/Login'
import Home from './../page/home/Home'

const AppNavigator = createStackNavigator({
    Home,
    Login
    },
    {initialRouteName:'Home',
    // headerMode: 'none',
}
    );

export default createAppContainer(AppNavigator);