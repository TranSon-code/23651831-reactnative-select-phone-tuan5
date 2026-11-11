import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const favoriteProducts = [
  { id: '1', name: 'Điện Thoại Vsmart Joy 3', price: '1.790.000 đ' },
  { id: '3', name: 'Điện Thoại Vsmart Aris Pro', price: '3.990.000 đ' },
];

export default function FavoritesTab() {
  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteProducts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
            <Ionicons name="heart" size={22} color="#E53935" />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  list: { padding: 16 },
  card: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
  },
  title: { fontSize: 16, fontWeight: 'bold', color: '#212121' },
  price: { fontSize: 14, color: '#D32F2F', fontWeight: 'bold', marginTop: 4 },
});