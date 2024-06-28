import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

export default function genero() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState(null);

  const predictGender = async () => {
    try {
      const response = await axios.get(`https://api.genderize.io/?name=${name}`);
      setGender(response.data.gender);
    } catch (error) {
      console.error(error);
    }
  };

  return ( 
    <View style={styles.container}>
      <Text style={styles.title}>Predecir Género</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su nombre"
        value={name}
        onChangeText={setName}
      />
      <TouchableOpacity style={styles.button} onPress={predictGender}>
        <Text style={styles.buttonText}>Predecir</Text>
      </TouchableOpacity>
      {gender && (
        <View style={[styles.result, { backgroundColor: gender === 'male' ? 'blue' : 'pink' }]}>
          <Text style={styles.resultText}>{gender === 'male' ? 'Masculino' : 'Femenino'}</Text>
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
  },
  resultText: {
    fontSize: 18,
    color: '#fff',
  },
});

