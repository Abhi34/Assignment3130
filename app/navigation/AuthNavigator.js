import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const AppStack = createStackNavigator();

const AuthNavigator = () => (
    <AppStack.Navigator>
        <AppStack.Screen name ="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
        <AppStack.Screen name ="Login" component={LoginScreen}/>
        <AppStack.Screen name ="Register" component={RegisterScreen}/>
    </AppStack.Navigator>
)

export default AuthNavigator;