import React, {useHook} from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppColors from '../config/AppColors';
import AppIcon from '../components/AppIcon';
import AppScreen from '../components/AppScreen';
import AppListItem from '../components/AppListItem';

function AccountScreen({navigation, route}) {
    console.log(route.params);
    return (
        <AppScreen style = {styles.random}>
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

                    <View style = {styles.profileContainer}>
                        <AppListItem image = {require("../assets/WillSmith.jpg")} title = {route.params.paramName} subtitle={route.params.paramEmail}/>
                    </View>  

                    <View style = {styles.linksContainer}>
                        <AppListItem title = "My memories" IconComponent={<AppIcon name="panorama" size = {50} iconColor = {AppColors.tertiaryColor} backgroundColor = {AppColors.secondaryColor}/>} onPress = {() => navigation.navigate("My Memories")}/>
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
    profileContainer: {
        backgroundColor: AppColors.otherColor,
        marginTop: 50,
        height: 100,
        justifyContent: 'center'
    },
    linksContainer: {
        backgroundColor: AppColors.otherColor,
        marginVertical: 75,
        height:150,
        justifyContent: "space-around"
    },
    random : {
        marginTop: -30,
    }
})

export default AccountScreen;