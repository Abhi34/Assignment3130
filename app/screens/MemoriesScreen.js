import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppCard from '../components/AppCard';
import AppColors from '../config/AppColors';
import AppScreen from '../components/AppScreen';



function MemoriesScreen(props) {
    return (
        <AppScreen style = {styles.container}>
            <AppCard 
            title = "harry potter" 
            subtitle="read on march 2020"
            image = {require("../assets/potter.jpg")}/>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.primaryColor,
        flex: 1,
        padding: 20,
    },
})

export default MemoriesScreen;
