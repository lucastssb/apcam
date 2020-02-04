import React from 'react';
import { 
    View,
    StyleSheet,
    ImageBackground,
    Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import background from '../assets/background3.jpg';
import afa from '../assets/militaryAcademies/afa.gif';
import colegioNaval from '../assets/militaryAcademies/colegioNaval.png';
import eam from '../assets/militaryAcademies/eam.png';
import eear from '../assets/militaryAcademies/eear.png';
import epcar from '../assets/militaryAcademies/epcar.png';
import esa from '../assets/militaryAcademies/esa.png';
import escolaNaval from '../assets/militaryAcademies/escolaNaval.png';
import espcex from '../assets/militaryAcademies/espcex.png';
import fuzileirosNavais from '../assets/militaryAcademies/fuzileirosNavais.png';
import ime from '../assets/militaryAcademies/ime.png';
import ita from '../assets/militaryAcademies/ita.png';
import efomm from '../assets/militaryAcademies/efomm.png';


export default function MilitaryAcademies() {
  return (
    <View style= {styles.container}>
        <ImageBackground style= {styles.background} source= {background} blurRadius= {4}>
            <View style= {styles.touchableIcons}>
                <View style= {styles.botton}> 
                    <TouchableOpacity styles= {styles.bot}>
                        <Image style= {styles.icon} source= {afa}/>            
                    </TouchableOpacity>
                </View>
                <View style= {styles.botton}> 
                    <TouchableOpacity styles= {styles.bot}>
                        <Image style= {styles.icon} source= {colegioNaval}/>            
                    </TouchableOpacity>
                </View>
                <View style= {styles.botton}> 
                    <TouchableOpacity styles= {styles.bot}>
                        <Image style= {styles.icon} source= {eam}/>            
                    </TouchableOpacity>
                </View>
                <View style= {styles.botton}> 
                    <TouchableOpacity styles= {styles.bot}>
                        <Image style= {styles.icon} source= {eear}/>            
                    </TouchableOpacity>
                </View>
                <View style= {styles.botton}> 
                    <TouchableOpacity styles= {styles.bot}>
                        <Image style= {styles.icon} source= {epcar}/>            
                    </TouchableOpacity>
                </View>
                <View style= {styles.botton}> 
                    <TouchableOpacity styles= {styles.bot}>
                        <Image style= {styles.icon} source= {escolaNaval}/>            
                    </TouchableOpacity>
                </View>
                <View style= {styles.botton}> 
                    <TouchableOpacity styles= {styles.bot}>
                        <Image style= {styles.icon} source= {espcex}/>            
                    </TouchableOpacity>
                </View>
                <View style= {styles.botton}> 
                    <TouchableOpacity styles= {styles.bot}>
                        <Image style= {styles.icon} source= {fuzileirosNavais}/>            
                    </TouchableOpacity>
                </View>
                <View style= {styles.botton}> 
                    <TouchableOpacity styles= {styles.bot}>
                        <Image style= {styles.icon} source= {esa}/>            
                    </TouchableOpacity>
                </View>
                <View style= {styles.bottonBig}> 
                    <TouchableOpacity styles= {styles.bot}>
                        <Image style= {styles.iconBig} source= {ime}/>            
                    </TouchableOpacity>
                </View>
                <View style= {styles.bottonBig}> 
                    <TouchableOpacity styles= {styles.bot}>
                        <Image style= {styles.iconBig} source= {efomm}/>            
                    </TouchableOpacity>
                </View>
                <View style= {styles.bottonBigger}> 
                    <TouchableOpacity styles= {styles.bot}>
                        <Image style= {styles.iconBigger} source= {ita}/>            
                    </TouchableOpacity>
                </View>

                
            </View>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    background: {
        flex:1,
    },

    touchableIcons: {
        flex: 1,
        paddingTop: 100,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 25,
        alignItems: 'center',
        height: 60
        
    },
 
    botton: {
       margin: 10,
       height: 100,
       width: 100,
    },

    bot: {
        
    },

    icon: {
        height: 100,
        width: 100,
        resizeMode: 'contain',
    },

    bottonBig: {
        height: 180,
        width: 180,
        paddingTop: 20,
        paddingLeft: 30,
    },

    iconBig: {
        height: 120,
        width: 120,
        resizeMode: 'contain',
    },

    bottonBigger: {
        height: 200,
        width: 320,
        paddingLeft: 60,
    },

    iconBigger: {
        height: 100,
        width: 250,
        resizeMode: 'contain',
    },



})