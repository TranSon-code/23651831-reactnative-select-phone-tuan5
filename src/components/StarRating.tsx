import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function StarRating({ reviews = 828 }: { reviews?: number }) {
  return (
    <View style={styles.container}>
      <View style={styles.stars}>
        {[1, 2, 3, 4, 5].map((item) => (
          <Ionicons key={item} name="star" size={16} color="#FFD700" style={{ marginRight: 2 }} />
        ))}
      </View>
      <Text style={styles.reviewText}>(Xem {reviews} đánh giá)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', marginVertical: 6 },
  stars: { flexDirection: 'row' },
  reviewText: { marginLeft: 12, fontSize: 13, color: '#333' },
});