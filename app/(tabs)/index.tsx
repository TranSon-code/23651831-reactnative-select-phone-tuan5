import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

interface ProductItem {
  id: string;
  name: string;
  price: string;
}

const productsData: ProductItem[] = [
  { id: '1', name: 'Điện Thoại Vsmart Joy 3', price: '1.790.000 đ' },
  { id: '2', name: 'Điện Thoại Vsmart Live 4', price: '2.490.000 đ' },
  { id: '3', name: 'Điện Thoại Vsmart Aris Pro', price: '3.990.000 đ' },
  { id: '4', name: 'Điện Thoại Vsmart Star 5', price: '1.590.000 đ' },
  { id: '5', name: 'Điện Thoại Vsmart Active 3', price: '2.190.000 đ' },
];

export default function ProductsTab() {
  const router = useRouter();

  const handlePressItem = (item: ProductItem) => {
    router.push({
      pathname: '/screens/product-details',
      params: { id: item.id, name: item.name, price: item.price },
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={productsData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.7}
            onPress={() => handlePressItem(item)}
          >
            <View style={styles.info}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#757575" />
          </TouchableOpacity>
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
  info: { flex: 1 },
  title: { fontSize: 16, fontWeight: 'bold', color: '#212121' },
  price: { fontSize: 14, color: '#D32F2F', fontWeight: 'bold', marginTop: 4 },
});