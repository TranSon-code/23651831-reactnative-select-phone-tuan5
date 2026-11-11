import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ProductDetailsScreen() {
  const router = useRouter();
  const { id, name, price } = useLocalSearchParams<{ id: string; name: string; price: string }>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Ionicons name="phone-portrait-outline" size={80} color="#1976D2" />
        <Text style={styles.title}>{name || 'Chi tiết sản phẩm'}</Text>
        <Text style={styles.detailText}>Mã sản phẩm (ID): <Text style={styles.bold}>{id}</Text></Text>
        <Text style={styles.priceText}>Giá niêm yết: <Text style={styles.bold}>{price}</Text></Text>

        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={18} color="#FFF" style={{ marginRight: 6 }} />
          <Text style={styles.backBtnText}>Quay lại danh sách</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F2F5', justifyContent: 'center', padding: 20 },
  card: {
    backgroundColor: '#FFF',
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
  },
  title: { fontSize: 20, fontWeight: 'bold', color: '#212121', marginVertical: 12, textAlign: 'center' },
  detailText: { fontSize: 15, color: '#616161', marginBottom: 8 },
  priceText: { fontSize: 16, color: '#D32F2F', marginBottom: 24 },
  bold: { fontWeight: 'bold', color: '#000' },
  backBtn: {
    flexDirection: 'row',
    backgroundColor: '#1976D2',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  backBtnText: { color: '#FFF', fontWeight: 'bold', fontSize: 15 },
});