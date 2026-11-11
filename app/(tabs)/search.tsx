import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchScreen() {
  const [keyword, setKeyword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="#757575" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nhập từ khóa tìm kiếm..."
          value={keyword}
          onChangeText={setKeyword}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.resultBox}>
        {keyword.trim().length > 0 ? (
          <Text style={styles.resultText}>Đang tìm: "{keyword}"</Text>
        ) : (
          <Text style={styles.placeholderText}>Chưa nhập từ khóa tìm kiếm</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF', padding: 16 },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F2F5',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 48,
  },
  icon: { marginRight: 8 },
  input: { flex: 1, fontSize: 15, color: '#000' },
  resultBox: { marginTop: 24, alignItems: 'center' },
  resultText: { fontSize: 15, color: '#1976D2', fontWeight: 'bold' },
  placeholderText: { fontSize: 14, color: '#9E9E9E' },
});