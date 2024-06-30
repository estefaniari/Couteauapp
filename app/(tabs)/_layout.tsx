import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'briefcase' : 'briefcase-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="genero"
        options={{
          title: '', 
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'male-female' : 'male-female-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="edad"
        options={{
          title: '', 
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'people-circle' : 'people-circle-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="universidad"
        options={{
          title: '', 
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'school' : 'school-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="clima"
        options={{
          title: '', 
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'cloudy-night' : 'cloudy-night-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  ); 
}
