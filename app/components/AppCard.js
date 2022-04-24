import React from 'react';
import {StyleSheet, View, Image, Text } from 'react-native'

import AppColors from '../config/AppColors';
import AppText from './AppText';

function AppCard({title, subtitle, image}) {
    return (
        <View style = {styles.container}>
            <Image source = {image} style = {styles.image}/>
            <AppText style= {styles.header}>{title}</AppText>
            <AppText style = {styles.body}>{subtitle}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.otherColor,
        borderRadius: 12,
        overflow: 'hidden',
    },
    image: {
        height: 200,
        width :"100%",
    },
    header: {
        fontWeight: 'bold',
        marginLeft: 10,
    },
    body: {
        marginLeft: 10,
        fontSize: 15,
    }
})

export default AppCard;