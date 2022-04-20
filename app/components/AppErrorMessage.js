import React from 'react';
import {Text, StyleSheet } from 'react-native'

function AppErrorMessgage({style, children}) {
    return (
        <Text style = {styles.text}>
            {children}
        </Text>
    ); 
}

const styles = StyleSheet.create({
    text:{
        fontSize: 20, 
        fontFamily: 'monospace',
        color:'black',
    }
})

export default AppErrorMessgage;