import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

const sampleProducts = [
  { id: '1', name: 'Điện Thoại Vsmart Joy 3', price: '1.790.000 đ' },
  { id: '2', name: 'Điện Thoại Vsmart Live 4', price: '2.490.000 đ' },
  { id: '3', name: 'Điện Thoại Vsmart Aris Pro', price: '3.990.000 đ' },
  { id: '4', name: 'Điện Thoại Vsmart Star 5', price: '1.590.000 đ' },
  { id: '5', name: 'Điện Thoại Vsmart Active 3', price: '2.190.000 đ' },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={sampleProducts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardPrice}>{item.price}</Text>
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
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#212121' },
  cardPrice: { fontSize: 14, color: '#D32F2F', fontWeight: 'bold', marginTop: 6 },
});