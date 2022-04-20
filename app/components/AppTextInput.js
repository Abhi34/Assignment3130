import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppColors from '../config/AppColors';

function AppTextInput({icon, ...otherProps}) {
    return (
        <View style = {styles.container}>
            <MaterialCommunityIcons name = {icon} size = {28}/>
            <TextInput style = {styles.textInput} {...otherProps}/>
        </View>  
    );  
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderRadius: 25,
        padding: 10,
        marginVertical: 10,
        width: '100%',
    },
    textInput: {
        fontSize: 20, 
        fontFamily: 'monospace',
        marginLeft: 10,
        flex: 1,
    }
})

export default AppTextInput;