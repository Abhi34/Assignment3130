import React, {useState} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { Formik } from 'formik';

import AppButton from '../components/AppButton';
import AppColors from '../config/AppColors';
import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';
 
function LoginScreen(props) {

    return (
       <AppScreen>
           <ImageBackground
                source = {require("../assets/myMemoryBackground.jpg")}
                style = {styles.background}
                blurRadius={5.5} >

                <View style = {styles.loginContainer}>
                        <MaterialCommunityIcons
                            name = "camera-image" 
                            size = {60}
                            color = {AppColors.tertiaryColor}
                        />
                </View>   
                <Formik
                    initialValues={{email:'', password:''}}  
                    onSubmit = {values => console.log(values)}  
                        >
                            {({handleChange, handleSubmit}) => (
                                <>  
                                    <View style = {styles.textInputContainer}>
                                        <AppTextInput
                                            autoCapatalize="none"
                                            autoCorrect={false}
                                            icon = "email"
                                            placeholder="Email Address"
                                            keyboardType="email-address"
                                            textContentType="emailAddress"
                                            onChangeText = {handleChange("email")}/>
                                        <AppTextInput
                                            autoCapatalize="none"
                                            autoCorrect={false}
                                            icon = "lock"
                                            placeholder="Password"
                                            secureTextEntry={true}
                                            textContentType="password"
                                            onChangeText = {handleChange("password")}/>      
                                    </View>

                                    <View style = {styles.buttonContainer}> 
                                        <AppButton title = "Login" color="primaryColor" onPress = {handleSubmit}/>
                                    </View>
                                </>
                            )} 
                </Formik>
            </ImageBackground> 
       </AppScreen>
    );
} 

const styles = StyleSheet.create({
    loginContainer: {
        justifyContent:'center',
        alignItems: 'center',
        marginTop:80, 
    },
    textInputContainer: {
        marginTop: 50,
        padding: 10,
    },
    background: {
        flex: 1,
    },
    buttonContainer: {
        alignSelf: 'center',
    },
})

export default LoginScreen;