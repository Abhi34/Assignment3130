import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import AccountScreen from '../screens/AccountScreen';
import TabNaigator from './TabNavigator';
import MemoriesListScreen from '../screens/MemoriesListScreen';
import MoreInfo from '../screens/MoreInfo';


const AppStack = createStackNavigator();

const AuthNavigator = () => (                                                   
    <AppStack.Navigator mode = "modal"> 
        <AppStack.Screen name ="Account" component={AccountScreen} options={{headerShown:false}}/>
        <AppStack.Screen name ="My Memories" component={MemoriesListScreen} options={{headerShown:false}}/> 
        <AppStack.Screen name ="MoreInfo" component={MoreInfo} options={{headerShown:false}}/> 
    </AppStack.Navigator>                                                                           
)

export default AuthNavigator;