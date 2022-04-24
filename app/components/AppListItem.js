import React from 'react';
import { StyleSheet, View, Image} from 'react-native';

import AppText from './AppText';

function AppListItem({image, title, subtitle, IconComponent}) {
    return (
        <View style = {styles.container}>
            {IconComponent}
            {image && <Image source={image} style = {styles.image}/>}
            <View style = {styles.textContainer}>
                <AppText style = {styles.header}>{title}</AppText>
                {subtitle && <AppText style = {styles.body}>{subtitle}</AppText>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginLeft: 30,
    },

    image: {
        height: 75,
        width: 75,
        borderRadius: 37,
    },
    textContainer: {
        marginLeft: 25,
        flexDirection:'column',
    },
    header: {
        fontWeight: 'bold',
        marginVertical: 5,
    },
    body: {
        fontSize: 15,
    },
})

export default AppListItem;