import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Aplicación Multifuncional</Text>
    <Image source={require('../../assets/images/herramientas.png')} style={styles.image} />
   </View>
  );
} 
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
     backgroundColor: 'white'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});