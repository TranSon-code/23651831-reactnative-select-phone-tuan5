import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import ColorOption from '../../src/components/ColorOption';

export default function SelectPhoneScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ currentColor?: string }>();
  
  const [color, setColor] = useState<'blue' | 'red' | 'black' | 'white'>(
    (params.currentColor as any) || 'blue'
  );

  const phoneImages = {
    blue: require('../../assets/vsmart-blue.png'),
    red: require('../../assets/vsmart-red.png'),
    black: require('../../assets/vsmart-black.png'),
    white: require('../../assets/vsmart-white.png'),
  };

  const colorMeta = {
    white: { label: 'bạc / trắng', hex: '#C5F1FB' },
    red: { label: 'đỏ', hex: '#F30D0D' },
    black: { label: 'đen', hex: '#000000' },
    blue: { label: 'xanh', hex: '#234896' },
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topInfo}>
        <Image source={phoneImages[color]} style={styles.thumb} resizeMode="contain" />
        <View style={styles.meta}>
          <Text style={styles.name}>Điện Thoại Vsmart Joy 3</Text>
          <Text style={styles.name}>Hàng chính hãng</Text>
          <Text style={styles.colorTag}>Màu: <Text style={{ fontWeight: 'bold' }}>{colorMeta[color].label}</Text></Text>
          <Text style={styles.provider}>Cung cấp bởi <Text style={{ fontWeight: 'bold' }}>Tiki Tradding</Text></Text>
          <Text style={styles.price}>1.790.000 đ</Text>
        </View>
      </View>

      <View style={styles.paletteSection}>
        <Text style={styles.paletteLabel}>Chọn một màu bên dưới:</Text>

        <View style={styles.colorGroup}>
          <ColorOption colorCode={colorMeta.white.hex} isSelected={color === 'white'} onPress={() => setColor('white')} />
          <ColorOption colorCode={colorMeta.red.hex} isSelected={color === 'red'} onPress={() => setColor('red')} />
          <ColorOption colorCode={colorMeta.black.hex} isSelected={color === 'black'} onPress={() => setColor('black')} />
          <ColorOption colorCode={colorMeta.blue.hex} isSelected={color === 'blue'} onPress={() => setColor('blue')} />
        </View>

        <TouchableOpacity
          style={styles.doneBtn}
          onPress={() => router.navigate({ pathname: '/', params: { color } })}
        >
          <Text style={styles.doneText}>XONG</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  topInfo: { flexDirection: 'row', padding: 14, backgroundColor: '#FFF' },
  thumb: { width: 100, height: 120 },
  meta: { flex: 1, marginLeft: 14, justifyContent: 'space-between' },
  name: { fontSize: 14, color: '#000' },
  colorTag: { fontSize: 13, color: '#333' },
  provider: { fontSize: 13, color: '#333' },
  price: { fontSize: 15, fontWeight: 'bold', color: '#000' },
  paletteSection: { flex: 1, backgroundColor: '#C4C4C4', padding: 16, justifyContent: 'space-between' },
  paletteLabel: { fontSize: 16, color: '#000', marginBottom: 6 },
  colorGroup: { alignItems: 'center' },
  doneBtn: { backgroundColor: 'rgba(25, 82, 226, 0.9)', paddingVertical: 12, borderRadius: 8, alignItems: 'center' },
  doneText: { color: '#FFF', fontSize: 17, fontWeight: 'bold' },
});