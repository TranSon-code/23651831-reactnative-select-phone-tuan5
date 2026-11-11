import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#1976D2',
        tabBarInactiveTintColor: '#757575',
        headerStyle: { backgroundColor: '#1976D2' },
        headerTintColor: '#FFF',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Products',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid-outline" size={size} color={color as string} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={size} color={color as string} />
          ),
        }}
      />
    </Tabs>
  );
}