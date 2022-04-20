import React, {useState} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppButton from '../components/AppButton';
import AppColors from '../config/AppColors';
import AppErrorMessgage from '../components/AppErrorMessage';
import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';

const schema = Yup.object().shape(
    {
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).max(12).label("Password"),
    }
);
 
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
                    validationSchema = {schema} 
                        >
                            {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
                                <>  
                                    <View style = {styles.textInputContainer}>
                                        <AppTextInput
                                            autoCapatalize="none"
                                            autoCorrect={false}
                                            icon = "email"
                                            placeholder="Email Address"
                                            keyboardType="email-address"
                                            textContentType="emailAddress"
                                            onBlur = {() => setFieldTouched("email")}
                                            onChangeText = {handleChange("email")}/>
                                           {touched.email && <AppErrorMessgage>{errors.email}</AppErrorMessgage>}
                                        <AppTextInput
                                            autoCapatalize="none"
                                            autoCorrect={false}
                                            icon = "lock"
                                            placeholder="Password"
                                            secureTextEntry={true}
                                            textContentType="password"
                                            onBlur = {() => setFieldTouched("password")}
                                            onChangeText = {handleChange("password")}/>  
                                            {touched.password && <AppErrorMessgage>{errors.password}</AppErrorMessgage>}
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