import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/sGeneralStyles';

const ScreenGeneral = ( {navigation} ) => {
  return (      
    <View>      
      <View style={styles.header}>
        <TouchableOpacity 
          onPress = { () => { navigation.openDrawer(); }} >
          <Icon style={styles.iconos} name="bars" size={30} color="white" />
        </TouchableOpacity>        

        <View style={styles.imgContainer}>
          <Image style={styles.img} source={ require('../img/imgLogo.jpg') } />
        </View>

        <TouchableOpacity onPress = { () => { navigation.navigate('Inicio'); }}>          
            <Icon style={styles.iconos} name="search" size={30} color="white" />  
        </TouchableOpacity>                  
      </View>
    </View>
  );
}

export default ScreenGeneral;