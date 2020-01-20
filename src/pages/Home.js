import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';




import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';

import SpotList from '../components/SpotList';
// import VideoPlayer from '../components/VideoPlayer';

// import videoo  from '../assets/video.mp4';



const Home = ({ navigation }) => {
    return(

      

        <ScrollView> 
        
        <View style= {styles.container}>

      
        
          <SpotList/>  
        
        </View>
        
        </ScrollView>

        
    )
}

export default Home;

const styles =  StyleSheet.create({
    container: {
        marginTop: 30
    },

    video: {
      marginTop: 30
    },

    

    
})