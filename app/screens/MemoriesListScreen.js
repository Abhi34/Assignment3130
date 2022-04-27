import React from 'react';
import { StyleSheet, ImageBackground, FlatList, View } from 'react-native';

import AppScreen from '../components/AppScreen';
import AppListItem from '../components/AppListItem';
import AppColors from '../config/AppColors';
import AppIcon from '../components/AppIcon';


const memories = [
    {
        id:1,
        name:"Family",
        image : require("../assets/icon.png")
    },
    {
        id:2,
        name:"Friends",
        image : require("../assets/icon.png")
    }
]
function MemoriesListScreen(props) {
    return (
        <AppScreen>
            <ImageBackground 
                source = {require("../assets/myMemoryBackground.jpg")}
                style = {styles.background}
                blurRadius={5.5}>

                    <FlatList
                            data={memories}
                            keyExtractor = {memories => memories.id.toString()} 
                            renderItem = {({item}) =>
                                <AppListItem 
                                    title={item.name}
                                    image={item.image}
                                    onPress = {() => console.log(item)}
                                    swipe = {() => {<View style = {styles.deleteView}>
                                                        <AppIcon name ="trash-can" iconColor={AppColors.primaryColor} backgroundColor={AppColors.secondaryColor}/>
                                                    </View>}}
                                /> 
                             }   
                    />                    
            </ImageBackground>
            
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    deleteView: {
        backgroundColor: AppColors.primaryColor,
        width: 75,
    },
})

export default MemoriesListScreen;