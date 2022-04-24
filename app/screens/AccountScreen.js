import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import AppColors from '../config/AppColors';
import AppScreen from '../components/AppScreen';

function AccountScreen(props) {
    return (
        <AppScreen>
            <ImageBackground 
                source = {require("../assets/myMemoryBackground.jpg")}
                style = {styles.background}
                blurRadius={5.5}>
                    <View style = {styles.loginContainer}>
                            <MaterialCommunityIcons
                                name = "camera-image" 
                                size = {60}
                                color = {AppColors.tertiaryColor}
                            />
                    </View> 
            </ImageBackground>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    loginContainer: {
        justifyContent:'center',
        alignItems: 'center',
        marginTop:25, 
    },
})

export default AccountScreen;