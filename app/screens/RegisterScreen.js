import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import AppButton from '../components/AppButton';
import AppColors from '../config/AppColors';
import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';

function RegisterScreen(props) {
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

                <View style = {styles.textInputContainer}>
                        <AppTextInput
                            autoCapatalize="none"
                            autoCorrect={false}
                            icon = "account"
                            placeholder="Name"/>
                        <AppTextInput
                            autoCapatalize="none"
                            autoCorrect={false}
                            icon = "email"
                            placeholder="Email Address"
                            keyboardType="email-address"
                            textContentType="emailAddress"/>
                        <AppTextInput
                            autoCapatalize="none"
                            autoCorrect={false}
                            icon = "lock"
                            placeholder="Password"
                            secureTextEntry={true}
                            textContentType="password"/>     
                        <AppTextInput
                            autoCapatalize="none"
                            autoCorrect={false}
                            icon = "lock"
                            placeholder="Re-Enter Password"
                            secureTextEntry={true}
                            textContentType="password"/>          
                </View>

                <View style = {styles.buttonContainer}> 
                    <AppButton title = "Register" color="secondaryColor"/>
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
    textInputContainer: {
        marginTop: 0,
        padding: 10,
    },
    buttonContainer: {
        alignSelf: 'center',
    },
})

export default RegisterScreen;