import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerStyle: { backgroundColor: '#1976D2' },
          headerTintColor: '#FFF',
          headerTitleStyle: { fontWeight: 'bold' },
          drawerActiveTintColor: '#1976D2',
          drawerInactiveTintColor: '#333',
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Home',
            title: 'Trang chủ',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color as string} />
            ),
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            drawerLabel: 'Profile',
            title: 'Hồ sơ người dùng',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color as string} />
            ),
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: 'Settings',
            title: 'Cài đặt hệ thống',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" size={size} color={color as string} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}