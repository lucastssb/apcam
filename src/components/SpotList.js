import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import img from '../assets/image.jpg';
import img2 from '../assets/image2.png';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

export default function SpotList(props) {
    return (
            <View style= {styles.container}>
                <View style= {styles.news}>
                    <Text style= {styles.titleNews}>Notícias</Text>

                        <FlatList
                            style= {styles.listNews}
                            data= {DATA}
                            keyExtractor= {item => item.id}
                            horizontal
                            showsHorizontalScrollIndicator= {false}
                            renderItem= {({item}) => (
                                <View style= {styles.listNewsItem}>
                                    <Image style= {styles.imageNews} source={img}/>
                                    <Text>{item.title}</Text>
                                
                                </View>
                        )} />
                </View>

                <View style= {styles.contests}>
                    <Text style= {styles.titleContests}>Concursos</Text>

                    <FlatList
                            style= {styles.listContests}
                            data= {DATA}
                            keyExtractor= {item => item.id}
                            horizontal
                            showsHorizontalScrollIndicator= {false}
                            renderItem= {({item}) => (
                                <View style= {styles.listContestsItem}>
                                    <Image style= {styles.imageContests} source={img2}/>
                                    <Text>{item.title}</Text>
                                    
                                </View>
                        )} />
                </View>
            </View>
    )
}

const styles = StyleSheet.create({

    container: {
        marginTop: 30,
    },

    titleNews: {
        fontSize: 20,
        paddingHorizontal: 20,
        marginBottom: 15,
    },

    titleContests: {
        fontSize: 20,
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    
    news: {
        paddingHorizontal: 20,
        marginBottom: 10,
    },

    contests: {
        paddingHorizontal: 20,
        marginBottom: 10,
    },

    listContestsItem: {
        paddingRight: 15,
    },

    listNewsItem: {
        marginRight: 15,
    },

    imageNews: {
        width:250,
        height: 140,
        borderRadius: 5,
      },

      imageContests: {
        width:250,
        height: 140,
        borderRadius: 5,
      },
})