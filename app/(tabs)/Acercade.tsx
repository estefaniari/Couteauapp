import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

  export default function Acercade(){
    return (
      <View style={styles.container}>
      <Image
        source={require("../../assets/images/photo1716504992.jpeg")}
        style={styles.image}
      />
      <Text style={styles.title}>Contacto</Text>
      <Text style={styles.details}>Email: estefanilorenzo49@gmail.com</Text>
      </View>
    
    );
  }; 

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
       backgroundColor: 'white'
     
    },
    image: {
      width: 150,
      height: 150,
      borderRadius: 100,

    },
    title: {
      fontSize: 27,
      marginTop: 20,
      fontWeight: 'bold',
      color: 'black'
    
    },
    details: {
      fontSize: 21,
      marginTop: 10,
      textAlign: 'center',
      color: 'green'
    },
  });
   