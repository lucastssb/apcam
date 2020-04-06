import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import studentBackground from '../assets/studentBackground.jpg';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function StudentPage() {
    return(

        <ScrollView showsVerticalScrollIndicator= {false}>
        <View style= {styles.container}>
            <ImageBackground style= {styles.imageBackground} source= {studentBackground}>
            <View style= {styles.notificationPainel}>
                <View style= {styles.notificationHeader}>
                    <Text style= {styles.headerText}> Avisos </Text>
                </View>
                <View style= {styles.notificationContent}>
                </View>
            </View>

            </ImageBackground>
            <View style= {styles.bottons}>
                <TouchableOpacity style={styles.bot}>
                    <View style= {styles.botton}>
                        <Ionicons style= {styles.iconBottom} name={'md-list-box'} size={100} color="white"/>
                        <Text style= {styles.textBottom}> Apostilas</Text> 
                    </View>  
                </TouchableOpacity>
                <TouchableOpacity style={styles.bot}>
                    <View style= {styles.botton}>
                        <Ionicons style= {styles.iconBottom} name={'ios-school'} size={100} color="white"/>
                        <Text style= {styles.textBottom}> Notas</Text> 
                    </View>  
                </TouchableOpacity>
                <TouchableOpacity style={styles.bot}>
                    <View style= {styles.botton}>
                        <Ionicons style= {styles.iconBottom} name={'ios-today'} size={100} color="white"/>
                        <Text style= {styles.textBottom}> Atividades</Text> 
                    </View>  
                </TouchableOpacity>
                <TouchableOpacity style={styles.bot}>
                    <View style= {styles.botton}>
                        <Ionicons style= {styles.iconBottom} name={'ios-chatbubbles'} size={80} color="white"/>
                        <Text style= {{paddingTop: 84, position: 'absolute', fontSize: 20, color: 'white', textAlign: 'center'}}> Fale com o professor</Text> 
                    </View>  
                </TouchableOpacity>
                <TouchableOpacity style={styles.bot}>
                    <View style= {styles.botton}>
                        <Ionicons style= {styles.iconBottom} name={'md-checkbox-outline'} size={100} color="white"/>
                        <Text style= {styles.textBottom}> Simulados</Text> 
                    </View>  
                </TouchableOpacity>
                <TouchableOpacity style={styles.bot}>
                    <View style= {styles.botton}>
                        <Ionicons style= {styles.iconBottom} name={'ios-people'} size={100} color="white"/>
                        <Text style= {styles.textBottom}> Fórum Apcam </Text> 
                    </View>  
                </TouchableOpacity>
                
               
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
    },

    notificationPainel: {
        flex: 1,
        height: 160,
        width: 380,
        position: 'absolute',
        alignSelf:'center',
        marginTop: 130,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    notificationHeader: {
        backgroundColor: '#497240',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: 30,
        alignItems: 'center'


    },

    headerText: {
        fontSize: 23,
        color: 'white',
    },

    notificationContent: {
        flex: 1,
        backgroundColor: '#707070',
        opacity: 0.7,
    },

    bottons: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        flexWrap: 'wrap',
        justifyContent: 'center',
    },

    bot: {
        flex:1,
    },

    botton: {
        height: 140,
        width: 140,
        backgroundColor: '#497240',
        margin: 20,
        borderRadius: 3,
        opacity: 0.9,
        paddingTop: 10,
        alignItems:'center',
    },

    iconBottom: {
    },

    textBottom: {
        color: 'white',
        position: 'absolute',
        paddingTop: 105,
        fontSize: 20,
    }
});