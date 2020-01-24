import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    StyleSheet,
} from 'react-native';

import studentBackground from '../assets/studentBackground.jpg';
import { ScrollView } from 'react-native-gesture-handler';

export default function StudentPage() {
    return(

        <ScrollView>
        <SafeAreaView style= {styles.container}>
            <ImageBackground style= {styles.imageBackground} source= {studentBackground}>
            <View style= {styles.notificationPainel}>

            </View>

            </ImageBackground>
            <View style= {styles.bottons}>
                <View style= {styles.botton}></View>
                <View style= {styles.botton}></View>
                <View style= {styles.botton}></View>
                <View style= {styles.botton}></View>
                <View style= {styles.botton}></View>
                <View style= {styles.botton}></View>
                
            </View>
            
        </SafeAreaView>
        </ScrollView>
    );
    
}

const styles = StyleSheet.create({
    container: {

    },
    imageBackground: {
        flex: 1,
        height: 300,
        width: 415,
    },

    notificationPainel: {
        flex: 1,
        height: 160,
        width: 380,
        backgroundColor: '#707070',
        position: 'absolute',
        alignSelf:'center',
        marginTop: 130,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        opacity: 0.7
        
    },
    bottons: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        flexWrap: 'wrap',
        alignItems: 'center',
        paddingHorizontal: 10,
    },

    botton: {
        height: 150,
        width: 177,
        backgroundColor: '#497240',
        margin: 10,
        borderRadius: 3,
        opacity: 0.9,
        
    },
});