import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import StarRating from '../src/components/StarRating';

export default function ProductScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ color?: string }>();

  const selectedColor = (params.color as 'blue' | 'red' | 'black' | 'white') || 'blue';

  const phoneImages = {
    blue: require('../assets/vsmart-blue.png'),
    red: require('../assets/vsmart-red.png'),
    black: require('../assets/vsmart-black.png'),
    white: require('../assets/vsmart-white.png'),
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageBox}>
        <Image source={phoneImages[selectedColor]} style={styles.phoneImg} resizeMode="contain" />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        <StarRating reviews={828} />

        <View style={styles.priceRow}>
          <Text style={styles.price}>1.790.000 đ</Text>
          <Text style={styles.oldPrice}>1.790.000 đ</Text>
        </View>

        <View style={styles.refundRow}>
          <Text style={styles.refundText}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <Ionicons name="help-circle-outline" size={16} color="#000" style={{ marginLeft: 6 }} />
        </View>

        <TouchableOpacity
          style={styles.selectColorBtn}
          onPress={() => router.push({ pathname: '/screens/select-phone', params: { currentColor: selectedColor } })}
        >
          <Text style={styles.selectColorText}>4 MÀU - CHỌN MÀU</Text>
          <Ionicons name="chevron-forward" size={18} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buyBtn} onPress={() => alert('Đã chọn mua thành công!')}>
          <Text style={styles.buyText}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  imageBox: { flex: 1.1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  phoneImg: { width: '80%', height: '100%' },
  content: { flex: 1, paddingHorizontal: 20 },
  title: { fontSize: 15, fontWeight: 'bold', color: '#000' },
  priceRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 8 },
  price: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  oldPrice: { fontSize: 14, color: '#888', textDecorationLine: 'line-through', marginLeft: 24 },
  refundRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  refundText: { color: '#E53935', fontWeight: 'bold', fontSize: 12 },
  selectColorBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#BBB',
    borderRadius: 8,
    paddingVertical: 10,
    marginBottom: 20,
  },
  selectColorText: { fontSize: 14, fontWeight: 'bold', textAlign: 'center' },
  buyBtn: { backgroundColor: '#EE0A0A', borderRadius: 8, paddingVertical: 14, alignItems: 'center' },
  buyText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});