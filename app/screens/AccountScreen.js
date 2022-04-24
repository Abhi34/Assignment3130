import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppColors from '../config/AppColors';
import AppIcon from '../components/AppIcon';
import AppScreen from '../components/AppScreen';
import AppListItem from '../components/AppListItem';

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

                    <View style = {styles.profileContainer}>
                        <AppListItem image = {require("../assets/WillSmith.jpg")} title = "Will Smith" subtitle="willsmith@slapme.com"/>
                    </View>  

                    <View style = {styles.linksContainer}>
                        <AppListItem title = "My memories" IconComponent={<AppIcon name="panorama" size = {50} iconColor = {AppColors.tertiaryColor} backgroundColor = {AppColors.secondaryColor}/>}/>
                        <AppListItem title = "My favourites" IconComponent={<AppIcon name="heart" size = {50} iconColor = {AppColors.tertiaryColor} backgroundColor = {AppColors.secondaryColor}/>}/>
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
    }
})

export default AccountScreen;