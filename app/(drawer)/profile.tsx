import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DrawerProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Ionicons name="person-circle" size={90} color="#1976D2" />
        <Text style={styles.name}>Trần Nam Sơn</Text>
        <Text style={styles.email}>nam.son@example.com</Text>
        <View style={styles.divider} />
        <Text style={styles.info}>Vai trò: Sinh viên Khoa CNTT</Text>
        <Text style={styles.info}>Lớp: DHKTPM19ATT</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', justifyContent: 'center', padding: 20 },
  card: { backgroundColor: '#FFF', padding: 24, borderRadius: 12, alignItems: 'center', elevation: 2 },
  name: { fontSize: 20, fontWeight: 'bold', color: '#212121', marginTop: 12 },
  email: { fontSize: 14, color: '#757575', marginTop: 4 },
  divider: { height: 1, width: '100%', backgroundColor: '#E0E0E0', marginVertical: 16 },
  info: { fontSize: 15, color: '#424242', marginVertical: 4 },
});