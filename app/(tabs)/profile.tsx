import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Ionicons name="person-circle" size={100} color="#1976D2" />
        <Text style={styles.name}>Trần Nam Sơn</Text>
        <Text style={styles.bio}>Lớp DHKTPM19ATT</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', justifyContent: 'center', alignItems: 'center', padding: 20 },
  card: {
    backgroundColor: '#FFF',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 32,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  name: { fontSize: 20, fontWeight: 'bold', color: '#212121', marginTop: 12 },
  bio: { fontSize: 14, color: '#757575', marginTop: 6 },
});