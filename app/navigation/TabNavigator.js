import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const AppTab = createBottomTabNavigator(); 

import AccountScreen from '../screens/AccountScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import AppColors from '../config/AppColors';
import AppIcon from '../components/AppIcon';
import AccountNavigator from "./AccountNavigator"

const TabNaigator = () => (
    <AppTab.Navigator tabBarOptions={{activeTintColor: AppColors.black, activeBackgroundColor: AppColors.primaryColor}}>
        <AppTab.Screen name = "Account" component = {AccountNavigator} options={{tabBarIcon : () => <AppIcon size = {45} name ="account"/>}}/>
        <AppTab.Screen name = "Home" component = {WelcomeScreen} options={{tabBarIcon : () => <AppIcon size = {45} name ="home"/>}}/>
    </AppTab.Navigator>
)

export default TabNaigator;