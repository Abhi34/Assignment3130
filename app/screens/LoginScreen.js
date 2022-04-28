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
import DataManager from '../config/DataManager';

const schema = Yup.object().shape(
    {
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).max(12).label("Password"),
    }
);

const users = [
    {
        id:"user1",
        name:"Billie Eilish",
        email: "bill@gmail.com",
        password:"1234",
        rePassword:"1234"
    },
    {
        id:"user2",
        name:"Jon Snow",
        email: "jon@gmail.com",
        password:"5678",
        rePassword:"5678"
    }
];

const validateUser = ({email, password}) => {
    return(
        users.filter((user) => user.email === email && user.password ===password).length>0
    );
};

const getUser = ({email}) => {
    return users.find((user) => user.email === email);
}

const createUser = ({email}) => {
    let commonData = DataManager.getInstance();
    let userID = getUser({email}).id;
    commonData.setUserID(userID);

    console.log(commonData)
}
 
function LoginScreen({navigation}) {

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
                    initialValues={{email:'', password:'',}}  
                    onSubmit = {(values,{resetForm}) => {
                        if(validateUser(values)) {
                        console.log(values);
                        resetForm();
                        createUser(values);
                        navigation.navigate("Account",{
                            screen:"Account",
                            params:{
                                screen: "Account",
                                    params:{    
                                        paramEmail: values.email,
                                        paramName: getUser(values).name,
                                },
                            }
                        }
                        );
                    }
                    else {
                        resetForm();
                        alert("Invalid Login Details")
                    }
                }
            }
                        validationSchema = {schema} 
                        >
                            {({values,handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
                                <>  
                                    <View style = {styles.textInputContainer}>
                                        <AppTextInput
                                            autoCapatalize="none"
                                            autoCorrect={false}
                                            icon = "email"
                                            placeholder="Email Address"
                                            keyboardType="email-address"
                                            textContentType="emailAddress"
                                            value = {values.email}
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
                                            value = {values.password}
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