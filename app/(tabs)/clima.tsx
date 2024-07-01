import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

interface WeatherData {
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
}

export default function WeatherScreen() {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
          params: {
            q: 'Santo Domingo',
            appid: '01ebc297441fb009a71268b36a377bfd',
            units: 'metric'
          }
        });
        setWeather(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clima en Santo Domingo</Text>
      {weather ? (
        <View style={styles.weatherContainer}>
          <Text style={styles.weatherText}>{`Temperatura: ${weather.main.temp}°C`}</Text>
          <Text style={styles.weatherText}>{`Condiciones: ${weather.weather[0].description}`}</Text>
        </View>
      ) : (
        <Text>Cargando...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  weatherContainer: {
    alignItems: 'center', 
  },
  weatherText: {
    fontSize: 19,
  },
});
