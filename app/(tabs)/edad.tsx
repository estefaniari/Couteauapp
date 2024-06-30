import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import axios from 'axios';

export default function AgePredictor() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);
  const [category, setCategory] = useState('');

  const predictAge = async () => {
    try {
      const response = await axios.get(`https://api.agify.io/?name=${name}`);
      const predictedAge = response.data.age;
      setAge(predictedAge);

      if (predictedAge < 18) { 
        setCategory('joven');
      } else if (predictedAge < 60) {
        setCategory('adulto');
      } else {
        setCategory('anciano');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getImage = () => {
    if (category === 'joven') {
      return require('../../assets/images/joven.avif');
    } else if (category === 'adulto') {
      return require('../../assets/images/adulto.avif');
    } else if (category === 'anciano') {
      return require('../../assets/images/anciano.jpg');
    }
    return null;
  };

  return ( 
    <View style={styles.container}>
      <Text style={styles.title}>Predecir Edad</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su nombre"
        value={name}
        onChangeText={setName}
      />
      <TouchableOpacity style={styles.button} onPress={predictAge}>
        <Text style={styles.buttonText}>Predecir</Text>
      </TouchableOpacity>
      {age !== null && (
        <View style={styles.result}>
          <Text style={styles.resultText}>
            {`Edad: ${age}`}
          </Text>
          <Text style={styles.resultText}>
            {`Categoría: ${category.charAt(0).toUpperCase() + category.slice(1)}`}
          </Text>
          <Image style={styles.image} source={getImage()} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderColor: 'green',
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
    borderRadius: 5,
    backgroundColor: '#F0F0F0',
    width: '80%', 
  },
  button: {
    backgroundColor: 'green', 
    paddingVertical: 10,
    paddingHorizontal: 20, 
    borderRadius: 20, 
    marginTop: 16,
  },
  buttonText: { 
    color: '#FFFFFF', 
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  result: {
    marginTop: 16,
    padding: 16,
    borderRadius: 4,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    color: 'black',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 16, 
  },
});