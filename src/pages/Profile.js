import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DrawerHeader from '../assets/drawerHeader.jpg';
import ProfilePic from '../assets/profilePic.jpg';
import { TouchableHighlight, ScrollView } from 'react-native-gesture-handler';

export default function Profile() {
    return(

        <ScrollView>
        <View style= {styles.container.container}>
            <View style= {styles.header}>
            <ImageBackground source={DrawerHeader} style= {styles.drawerHeaderBackground}>
            <View style= {styles.profileHeader}>
              <Image style= {styles.profilePicture} source= {ProfilePic}/>
              <Text style= {styles.profileName}> Lucas da Silva Barbosa</Text>
            </View>
          </ImageBackground>
            </View>
            <View style= {styles.options}>

                <Text style= {styles.optionsTitle}>Conta</Text>

                <View style= {styles.option}>
                    <TouchableHighlight style= {styles.button}>
                        <View style= {styles.touchable}>
                        <Text style= {styles.textButton}>Configurações da conta</Text>
                        <Ionicons style= {styles.buttonIcon} name= {'ios-arrow-forward'} size= {25} color= 'black'/>    
                        </View>
                    </TouchableHighlight>
                </View>
                <View style= {styles.option}>
                    <TouchableHighlight style= {styles.button}>
                        <View style= {styles.touchable}>
                            <Text style= {styles.textButton}>Segurança da conta</Text>
                            <Ionicons style= {styles.buttonIcon} name= {'ios-arrow-forward'} size= {25} color= 'black'/>
                        </View>
                    </TouchableHighlight>
                </View>
                
                <Text style= {styles.optionsTitle}>Pagamento</Text>

                <View style= {styles.option}>
                    <TouchableHighlight style= {styles.button}>
                        <View style= {styles.touchable}>
                            <Text style= {styles.textButton}>Formas de pagamento</Text>
                            <Ionicons style= {styles.buttonIcon} name= {'ios-arrow-forward'} size= {25} color= 'black'/>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style= {styles.option}>
                    <TouchableHighlight style= {styles.button}>
                        <View style= {styles.touchable}>
                            <Text style= {styles.textButton}>Situação financeira</Text>
                            <Ionicons style= {styles.buttonIcon} name= {'ios-arrow-forward'} size= {25} color= 'black'/>
                        </View>
                    </TouchableHighlight>
                </View>

                <Text style= {styles.optionsTitle}>Outras configurações</Text>

                <View style= {styles.option}>
                    <TouchableHighlight style= {styles.button}>
                        <View style= {styles.touchable}>
                            <Text style= {styles.textButton}>Opções de vídeo</Text>
                            <Ionicons style= {styles.buttonIcon} name= {'ios-arrow-forward'} size= {25} color= 'black'/>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style= {styles.option}>
                    <TouchableHighlight style= {styles.button}>
                        <View style= {styles.touchable}>
                            <Text style= {styles.textButton}>Configurações de notificação</Text>
                            <Ionicons style= {styles.buttonIcon} name= {'ios-arrow-forward'} size= {25} color= 'black'/>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style= {styles.option}>
                    <TouchableHighlight style= {styles.button}>
                        <View style= {styles.touchable}>
                            <Text style= {styles.textButton}>Compartilhar aplicativo Apcam</Text>
                            <Ionicons style= {styles.buttonIcon} name= {'ios-arrow-forward'} size= {25} color= 'black'/>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
        </ScrollView>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
      height: 163, 
    },

    drawerHeaderBackground: {
        flex: 1,
        alignItems: 'center'
    },

    profileHeader: {
        paddingTop: 40,
    },

    profilePicture: {
        width: 80,
        height: 80,
        borderRadius: 50,
        alignSelf: 'center',
        marginTop: 10,
      },

      profileName: {
        color: '#fff',
        paddingTop: 10,
      },

      options: {
        paddingHorizontal: 20,
        marginTop: 40,
      },

      option: {
        marginBottom: 20,
      },

      optionsTitle: {
        fontSize: 15,
        opacity: 0.7,
        marginBottom: 10,
      },

      touchable: {
          alignContent: 'space-between',
          flexDirection: 'row',
      },

      textButton: {
        flex: 1,
        fontSize: 20,
        paddingLeft: 5,
    },

    buttonIcon: {
        
    },

})