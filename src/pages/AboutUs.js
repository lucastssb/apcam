import React from 'react';
import { 
  View,
  ImageBackground,
  StyleSheet,
  Image,
  Text,
} from 'react-native';

import background from '../assets/background3.jpg';
import logo from '../assets/logoo.png';

export default function AboutUs() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={background} blurRadius={4}> 
        <View style={styles.logo}>
          <Image style={styles.logoIcon} source={logo}/>
        </View>
        <View style= {styles.text}>
        <Text style={styles.textContainer} >  

        <Text style={styles.textContent}>
        A Apcam Brasil é uma instituição de ensino 
        comprometidacom a formação de cidadãos que 
        sonham em servir as forças armadas brasileira. 
        A nossa trajetória começou há mais de 10 anos
        como instituição de ensino profissionalizante na 
        grande João Pessoa/PB, vem crescendo cada vez
        mais em cursos preparatórios para concursos 
        no segmento da carreira militar.
        </Text>
        
        <Text style={styles.textContent}>
        Hoje a Apcam Brasil é uma das melhores 
        academia de preparação a carreira militar, 
        atende não só a grande João Pessoa/PB 
        como também está presente em várias 
        regiões no território Brasileiro.
        </Text>
        
        <Text style={styles.textContent}>
        Missão: Formar cidadãos comprometidos e 
        destinados aos quadros permanentes a carreira
        Militar.
        </Text>

        <Text style={styles.textContent}>
        Visão: Ser referência na preparação e aprovação
        de jovens em concursos militares.
        </Text>

        <Text style={styles.textContent}>
        Valores: Ética, Disciplina e Comprometimento.
        </Text>

        </Text>
        </View>
      </ImageBackground>
      
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  background: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },

  logo: {

  },

  logoIcon: {
    height: 150,
    width: 165
    
  },

  text: {
    flex: 1,
    margin: 10,
    
  },

  textContainer: {
    color: 'white',
    textAlign: 'justify',
    
  },

  textContent: {
    paddingTop: 50, 
  }

})
