import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function DrawerHomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chào mừng đến với Drawer Navigation</Text>
      <Text style={styles.subText}>Vuốt từ cạnh trái sang hoặc bấm icon menu ở góc trên để mở danh mục.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24, backgroundColor: '#F8F9FA' },
  title: { fontSize: 20, fontWeight: 'bold', color: '#212121', textAlign: 'center', marginBottom: 12 },
  subText: { fontSize: 15, color: '#666', textAlign: 'center', lineHeight: 22 },
});