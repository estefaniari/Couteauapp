import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

interface Post {
  id: number;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
}

export default function noticias() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get('https://ramenparados.com/wp-json/wp/v2/posts', {
      params: {
        per_page: 3,
        order: 'desc',
        orderby: 'date',
      }
    })
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://ramenparados.com/wp-content/uploads/2020/06/RP2_LOGO_WEB-2.png' }} 
        style={styles.logo}
      />
      {posts.map(post => (
        <TouchableOpacity
          key={post.id}
          onPress={() => Linking.openURL(post.link)}
          style={styles.card}
        >
          <View style={styles.cardContent}>
            <Text style={styles.title}>{post.title.rendered}</Text>
            <Text style={styles.excerpt}>{post.excerpt.rendered.replace(/<[^>]+>/g, '')}</Text>
            <Text style={styles.readMore}>Leer más</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView> 
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 200, 
    height: 80,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    marginBottom: 15,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardContent: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  excerpt: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666',
  },
  readMore: {
    color: 'fuchsia',
    fontSize: 14, 
    marginTop: 10,
  },
});
