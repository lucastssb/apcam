import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';

import { ScrollView} from 'react-native-gesture-handler';

import SpotList from '../components/SpotList';

import videoThumbnailPic from '../assets/videoThumbnailPic.jpg';
import playIcon from '../assets/playIcon.png';

const Home = ({ navigation }) => {
    return(
        <ScrollView nestedScrollEnabled= {true}>   
            <View style= {styles.container}>
                <View style= {styles.video}> 
                    <Image style= {styles.videoThumbnail} source= {videoThumbnailPic}></Image>
                    <Image style= {styles.play} source= {playIcon}/>
                </View>
            <SpotList/> 
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
 
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

export default Home;