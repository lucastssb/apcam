import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView,
} from 'react-native';




import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';

import SpotList from '../components/SpotList';

import videoThumbnailPic from '../assets/videoThumbnailPic.jpg';
import playIcon from '../assets/playIcon.png';

const Home = ({ navigation }) => {
    return(

      

        <ScrollView> 
        
        <SafeAreaView style= {styles.container}>
            <View style= {styles.video}> 
                <Image style= {styles.videoThumbnail} source= {videoThumbnailPic}></Image>
                <Image style= {styles.play} source= {playIcon}/>
            </View>

      
        
          <SpotList/>  
        
        </SafeAreaView>
        
        </ScrollView>

        
    )
}

export default Home;

const styles =  StyleSheet.create({
    container: {
        marginTop: 30,
        
    },

    video: {
        flex: 1,
        justifyContent: 'center',
       

    },

    videoThumbnail: {
        height: 300,
        width: 500,
    },

    play: {
        height: 150,
        width: 150,
        position: 'absolute',
        alignSelf: 'center',
        
    },

})