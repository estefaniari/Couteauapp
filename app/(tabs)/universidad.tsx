import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Linking } from 'react-native';
import axios from 'axios';

export default function UniversityScreen() {
  const [country, setCountry] = useState('');
  const [universities, setUniversities] = useState([]);

  const fetchUniversities = async () => {
    try {
      const response = await axios.get(`http://universities.hipolabs.com/search?country=${country}`);
      setUniversities(response.data);
    } catch (error) {
      console.error(error);
    }
  }; 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar Universidades</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese el nombre del país en inglés"
        value={country}
        onChangeText={setCountry}
      />
      <TouchableOpacity style={styles.button} onPress={fetchUniversities}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>
      <FlatList
        data={universities}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.university}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.domain}>{item.domains[0]}</Text>
            <Text style={styles.website} onPress={() => Linking.openURL(item.web_pages[0])}>
              {item.web_pages[0]}
            </Text>
          </View> 
        )}
      />
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
  university: {
    padding: 16,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  domain: { 
    fontSize: 16,
    color: '#666',
  },
  website: {
    fontSize: 16,
    color: 'green',
  },
});
 