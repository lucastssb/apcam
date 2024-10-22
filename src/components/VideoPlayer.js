import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import Video from 'react-native-video';

export default function VideoPlayer({url}) {
    return(
        <Video source={url}   // Can be a URL or a local file.
            ref={(ref) => {
                this.player = ref
            }}                                      // Store reference
            onBuffer={this.onBuffer}                // Callback when remote video is buffering
            onError={this.videoError}               // Callback when video cannot be loaded
            style={styles.backgroundVideo} />
    );
    
}

const styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });