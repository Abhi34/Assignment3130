import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'

import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppColors from '../config/AppColors';
import AppButton from '../components/AppButton';



function WelcomeScreen({navigation}) {
    return (
        <AppScreen>
            <ImageBackground
                source = {require("../assets/myMemoryBackground.jpg")}
                style = {styles.background}
                blurRadius={5.5} >

                <View style = {styles.welcomeContainer}>
                    <MaterialCommunityIcons
                        name = "camera-image" 
                        size = {60}
                        color = {AppColors.tertiaryColor}
                    />
                    <AppText>MEMORIES</AppText>
                </View>   

                <View style = {styles.buttonContainer}>
                    <AppButton title = "Login" onPress={() => navigation.navigate("Login")}/>
                    <AppButton title = "Register" 
                    color="secondaryColor"
                    onPress={() => navigation.navigate("Register")}/>
                </View>  
                
            </ImageBackground>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    welcomeContainer: {
        justifyContent:'center',
        alignItems: 'center',
        marginTop:50,
    },
    buttonContainer: {
        marginTop:350,
        flexDirection:'column',
        justifyContent: 'space-between',
        height: 150,
        alignSelf: 'center',
        width: '50%',
        marginRight: 15,
    }
})

export default WelcomeScreen;