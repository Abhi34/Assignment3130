import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native'
import AppScreen from '../components/AppScreen';
function MoreInfo(props) {
    return (
        <AppScreen style = {styles.random}>
            <ImageBackground 
            source = {require("../assets/myMemoryBackground.jpg")}
                style = {styles.background}
                blurRadius={5.5}>
            </ImageBackground>
        </AppScreen>
    );
}
const styles = StyleSheet.create({
    background: {
        flex:1,
    },
    random: {
        marginTop: -30,
    }
})

export default MoreInfo;