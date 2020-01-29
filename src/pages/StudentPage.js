import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
} from 'react-native';

import studentBackground from '../assets/studentBackground.jpg';
import { ScrollView } from 'react-native-gesture-handler';

export default function StudentPage() {
    return(

        <ScrollView>
        <View style= {styles.container}>
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
            
        </View>
        </ScrollView>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        minHeight: 350,
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
        opacity: 0.6
        
    },
    bottons: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        flexWrap: 'wrap',
        justifyContent: 'center',

    },

    botton: {
        height: 140,
        width: 157,
        backgroundColor: '#497240',
        margin: 20,
        borderRadius: 3,
        opacity: 0.9,
        
    },
});